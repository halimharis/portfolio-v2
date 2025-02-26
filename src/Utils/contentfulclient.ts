import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const previewContentfulClient = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});
