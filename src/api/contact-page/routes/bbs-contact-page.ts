export default {
  routes: [
    {
      method: "GET",
      path: "/contact-page/bbs",
      handler: "contact-page.bbs",
      config: {
        auth: false,
      },
    },
  ],
};
