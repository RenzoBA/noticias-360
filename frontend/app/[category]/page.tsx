import { FC } from "react";

interface pageProps {
  params: { category: string };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>{params.category} page</div>;
};

export default page;
