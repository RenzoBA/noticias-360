import { FC } from "react";

interface pageProps {
  params: { category: string; article: string };
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div>
      {params.category} - {params.article} page
    </div>
  );
};

export default page;
