export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "noticias-360-standard",
        basePath: "cms",
        publicFiles: true,
        uniform: false,
      },
    },
  },
});
