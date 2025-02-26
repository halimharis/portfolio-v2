const contentfulManagement = require("contentful-management");
require("dotenv").config();

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.VITE_CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(process.env.VITE_CONTENTFUL_ENVIRONMENT)
    );
};
