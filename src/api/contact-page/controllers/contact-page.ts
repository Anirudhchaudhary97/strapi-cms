/**
 * contact-page controller
 */

import { factories } from "@strapi/strapi";
import type { Modules } from "@strapi/types";

type ContactChannel = {
  id: number;
  label?: string | null;
  value: string;
  link?: string | null;
  channelType?: string | null;
};

type ContactPageDocument = {
  documentId: string;
  locale?: string | null;
  createdAt?: string;
  updatedAt?: string;
  heroEyebrow?: string | null;
  title: string;
  subtitle?: string | null;
  heroImage?: unknown;
  formTitle?: string | null;
  formSubtitle?: string | null;
  successMessage?: string | null;
  errorMessage?: string | null;
  contactIntroTitle?: string | null;
  contactIntroSubtitle?: string | null;
  locationTitle?: string | null;
  locationText?: string | null;
  mapTitle?: string | null;
  mapDescription?: string | null;
  mapEmbedUrl?: string | null;
  phonesTitle?: string | null;
  emailsTitle?: string | null;
  businessHoursTitle?: string | null;
  businessHoursBody?: string | null;
  contactChannels?: ContactChannel[] | null;
  seo?: unknown;
};

const contactPopulate = {
  heroImage: {
    fields: [
      "url",
      "alternativeText",
      "formats",
      "width",
      "height",
      "hash",
      "ext",
      "mime",
      "size",
    ],
  },
  contactChannels: {
    fields: ["label", "value", "link", "channelType"],
  },
  seo: {
    fields: ["metaTitle", "metaDescription", "canonicalUrl", "keywords"],
    populate: {
      metaImage: {
        fields: [
          "url",
          "alternativeText",
          "formats",
          "width",
          "height",
          "hash",
          "ext",
          "mime",
          "size",
        ],
      },
    },
  },
};

const contactPopulateOptions =
  contactPopulate as unknown as Modules.Documents.Params.Populate.Any<"api::contact-page.contact-page">;

export default factories.createCoreController(
  "api::contact-page.contact-page",
  ({ strapi }) => ({
    async bbs(ctx) {
      const contactPage = await strapi
        .documents("api::contact-page.contact-page")
        .findFirst({
          populate: contactPopulateOptions,
        });

      if (!contactPage) {
        return ctx.notFound("Contact page content is not configured.");
      }

      const contact = contactPage as ContactPageDocument;

      const channels = Array.isArray(contact.contactChannels)
        ? contact.contactChannels.map((channel) => ({
            id: channel.id,
            label: channel.label,
            value: channel.value,
            link: channel.link ?? null,
            channelType: channel.channelType ?? null,
          }))
        : [];

      return {
        data: {
          hero: {
            eyebrow: contact.heroEyebrow ?? null,
            title: contact.title,
            subtitle: contact.subtitle ?? null,
            image: contact.heroImage ?? null,
          },
          form: {
            title: contact.formTitle ?? null,
            subtitle: contact.formSubtitle ?? null,
            successMessage: contact.successMessage ?? null,
            errorMessage: contact.errorMessage ?? null,
          },
          contact: {
            title: contact.contactIntroTitle ?? contact.locationTitle ?? null,
            subtitle:
              contact.contactIntroSubtitle ?? contact.locationText ?? null,
            phonesTitle: contact.phonesTitle ?? null,
            emailsTitle: contact.emailsTitle ?? null,
            channels,
          },
          location: {
            title: contact.locationTitle ?? null,
            description: contact.locationText ?? null,
            mapTitle: contact.mapTitle ?? null,
            mapDescription: contact.mapDescription ?? null,
            mapEmbedUrl: contact.mapEmbedUrl ?? null,
          },
          businessHours: {
            title: contact.businessHoursTitle ?? null,
            body: contact.businessHoursBody ?? null,
          },
          seo: contact.seo ?? null,
          meta: {
            documentId: contact.documentId,
            updatedAt: contact.updatedAt,
            createdAt: contact.createdAt,
            locale: contact.locale ?? null,
          },
        },
      };
    },
  })
);
