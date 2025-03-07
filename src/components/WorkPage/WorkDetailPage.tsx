import { useParams } from "react-router-dom";

export const WorkDetailPage = () => {
  console.log("masok");

  const { workId } = useParams<{ workId: string }>();

  return <div>{workId}</div>;
};
