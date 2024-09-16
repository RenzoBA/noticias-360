import qs from "qs";
import Image from "next/image";
import { getCategoriesData } from "@/lib/utils";
import Link from "next/link";
import Navbar from "./Navbar";

// const currentDate = new Date();

const query = qs.stringify({
  fields: ["name", "slug"],
  sort: ["id:asc"],
});

const Header = async () => {
  const categories = (await getCategoriesData(query)) ?? [];

  return (
    <header>
      <div className="flex w-full flex-row items-center justify-start border-b bg-gradient-to-r from-custom-blue to-custom-green p-4 md:justify-center">
        <Link href="/" prefetch={false}>
          <Image
            src="/assets/logo-extended-white.svg"
            alt="noticias-360-logo"
            width={350}
            height={120}
            className="w-36 md:w-[310px]"
          />
        </Link>
      </div>
      <div className="flex w-full flex-row items-center justify-start p-4 text-xs shadow md:justify-center">
        <Navbar categories={categories} />
      </div>
    </header>
  );
};

export default Header;
