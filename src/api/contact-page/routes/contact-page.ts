/**
 * contact-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::contact-page.contact-page", {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
