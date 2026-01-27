/**
 * contact-request controller
 */

import { factories } from "@strapi/strapi";
import axios from "axios";
export default factories.createCoreController(
  "api::contact-request.contact-request",
  ({ strapi }) => ({
    async create(ctx) {
      // Verify reCAPTCHA token
      const { captchaToken, ...requestData } = ctx.request.body.data;

      if (!captchaToken) {
        return ctx.badRequest("Captcha token missing");
      }

      const captchaRes = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
          params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: captchaToken,
          },
        },
      );

      if (!captchaRes.data.success || captchaRes.data.score < 0.6) {
        return ctx.forbidden("Captcha verification failed");
      }

      // Remove captchaToken from the data before saving
      ctx.request.body.data = requestData;

      // Call the default core controller create
      const response = await super.create(ctx);

      try {
        // Get the created contact request data
        const contactRequest = response.data;

        // Fetch the service name if a service relation exists
        let serviceName = "Not specified";
        if (contactRequest.attributes?.serviceInterestedIn?.data?.id) {
          const service = await strapi.entityService.findOne(
            "api::service.service",
            contactRequest.attributes.serviceInterestedIn.data.id,
          );
          serviceName = service?.title || "Not specified";
        }

        // Send email notification
        await strapi.plugins["email"].services.email.send({
          to: process.env.RESEND_USER_EMAIL || "anurudhchaudhary97@gmail.com",
          from: process.env.RESEND_DEFAULT_EMAIL || "onboarding@resend.dev",
          subject: `New Contact Request from ${contactRequest.attributes.fullName}`,
          html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #1e40af; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
                .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #1e40af; }
                .value { margin-top: 5px; }
                .footer { margin-top: 20px; padding: 15px; background-color: #e5e7eb; border-radius: 0 0 5px 5px; text-align: center; font-size: 12px; color: #6b7280; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">New Contact Request</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${contactRequest.attributes.fullName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value"><a href="mailto:${contactRequest.attributes.email}">${contactRequest.attributes.email}</a></div>
                  </div>
                  ${
                    contactRequest.attributes.phone
                      ? `
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value"><a href="tel:${contactRequest.attributes.phone}">${contactRequest.attributes.phone}</a></div>
                  </div>
                  `
                      : ""
                  }
                  <div class="field">
                    <div class="label">Service Interested In:</div>
                    <div class="value">${serviceName}</div>
                  </div>
                  ${
                    contactRequest.attributes.message
                      ? `
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${contactRequest.attributes.message.replace(/\n/g, "<br>")}</div>
                  </div>
                  `
                      : ""
                  }
                  ${
                    contactRequest.attributes.sourcePage
                      ? `
                  <div class="field">
                    <div class="label">Source Page:</div>
                    <div class="value">${contactRequest.attributes.sourcePage}</div>
                  </div>
                  `
                      : ""
                  }
                </div>
                <div class="footer">
                  <p>This notification was sent from the BBS Security CMS.</p>
                  <p>Request ID: ${contactRequest.id} | Created: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
          </html>
        `,
        });

        strapi.log.info(
          `Email sent for contact request ID: ${contactRequest.id}`,
        );
      } catch (error) {
        strapi.log.error("Failed to send email notification:", error);
        // Don't fail the request if email fails
      }

      return response;
    },
  }),
);
