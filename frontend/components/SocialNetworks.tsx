import qs from "qs";
import { SocialIcon } from "react-social-icons";
import { getSocialsData } from "@/lib/utils";
import { FC } from "react";
import Link from "next/link";

const socialsQuery = qs.stringify({
  fields: ["name", "url", "user"],
});

const SocialNetworks: FC = async () => {
  const socials = await getSocialsData(socialsQuery);

  return (
    <ul className="flex flex-col gap-0 md:flex-row lg:gap-4">
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
