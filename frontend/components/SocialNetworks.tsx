import qs from "qs";
import axios from "axios";
import { SocialIcon } from "react-social-icons";
import { flattenAttributes } from "@/lib/utils";
import { SocialLinkType } from "@/types/social";
import { FC } from "react";
import Link from "next/link";
import { BASE_URL } from "@/constants";

interface SocialNetworksProps {
  height: number;
  width: number;
}

const socialsQuery = qs.stringify({
  fields: ["name", "url", "user"],
});

const getSocialsData = async () => {
  const { data } = await axios(`${BASE_URL}/api/socials?${socialsQuery}`);
  return flattenAttributes(data.data) as SocialLinkType[];
};

const SocialNetworks: FC<SocialNetworksProps> = async ({ height, width }) => {
  const socials = await getSocialsData();

  return (
    <ul className="flex flex-col gap-0 sm:flex-row lg:gap-4">
      {socials.map((social) => (
        <li
          key={social.id}
          className="group flex flex-row items-center font-medium text-white"
          aria-label={social.name}
        >
          <SocialIcon
            url={social.url}
            target="_blank"
            fgColor="white"
            bgColor="transparent"
            style={{ height, width }}
          />
          <Link href={social.url} target="_blank" prefetch={false}>
            @<span className="group-hover:underline">{social.user}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialNetworks;
