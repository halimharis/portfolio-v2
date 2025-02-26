import { useContentfulContent } from "../Utils/useContentful";

const TesterPage: React.FC = () => {
  const { content } = useContentfulContent({
    entryId: "4Nmt8l0AUj3Jgr3RM3WsaU",
  });

  return <div>{content?.name}</div>;
};

export default TesterPage;
