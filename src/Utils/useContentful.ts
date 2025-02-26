import { useEffect, useState } from "react";
import { IContentFields } from "../@types/generated/contentful";
import { contentfulClient } from "./contentfulclient";

interface IUseContentfulContent {
  entryId: string;
}

export const useContentfulContent = ({ entryId }: IUseContentfulContent) => {
  const [content, setContent] = useState<IContentFields>();

  useEffect(() => {
    const fetchContentful = async () => {
      contentfulClient
        .getEntry(entryId)
        .then((entry) => setContent(entry.fields))
        .catch((err) => console.log(err));
    };

    fetchContentful();
  }, []);

  return { content };
};
