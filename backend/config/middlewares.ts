export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "https://admin.noticias360.com.pe"],
          "script-src": ["'self'", "https://admin.noticias360.com.pe"],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "https://admin.noticias360.com.pe",
          ],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "https://admin.noticias360.com.pe",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "https://admin.noticias360.com.pe",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
