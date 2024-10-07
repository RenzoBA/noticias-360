import Image from "next/image";
import SocialNetworks from "./SocialNetworks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#0038cd] to-[#00f1b7] px-5 pb-8 pt-16 text-center lg:px-8">
      <Image
        src="/assets/logo-extended-white.svg"
        alt="comunicaciones-360-logo"
        width={260}
        height={100}
      />
      <SocialNetworks />
      <div className="space-y-2 text-xs text-muted">
        <p>
          © 2024 Agencia de Comunicaciones 360 SAC. Todos los derechos
          reservados.
        </p>
        <p className="uppercase tracking-wider">
          App desarrollada por{" "}
          <Link
            href="https://www.linkedin.com/in/renzo-bocanegra-dev/?locale=es_ES"
            target="_blank"
            className="whitespace-nowrap hover:underline"
            prefetch={false}
            aria-label="LinkedIn de Renzo Bocanegra. Abre en una nueva ventana."
          >
            Renzo Bocanegra
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
