"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const translations = useTranslations("footer");

  return (
    <footer
      className="flex w-full flex-col justify-around gap-3 py-9 pt-12 text-white desktop:flex-row"
      style={{
        background: "linear-gradient(to bottom, #3b3b3b, #e8e8e8) top/100% 40% no-repeat", // Aplica o gradiente apenas nos últimos 20% da altura do componente
      }}
    >
      <div>
        <Link
          href="https://www.facebook.com/thegreatcontroversyproject/"
          target="_blank"
        >
          <Image
            className="ml-3 cursor-pointer"
            src="/facebook-icon.svg"
            alt="facebook icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-around gap-6 px-3 text-xs desktop:justify-between desktop:text-sm">
          <p className="text-gray drop-shadow-md cursor-pointer">{translations("policy")}</p>
          <p className="text-gray drop-shadow-md cursor-pointer">{translations("legal")}</p>
          <p className="text-gray drop-shadow-md cursor-pointer">{translations("tradmark")}</p>
        </div>
        <div className="flex flex-col items-end p-2 text-end text-[10px] desktop:text-xs">
          <p className="text-gray drop-shadow-md">Copyright 2024 Kerkgenootschap der Zevende-dags Adventisten</p>
          <p className="text-gray drop-shadow-md">
            Utrecht, Amersfoortseweg 18, 3712 BC Huis Ter Heide
          </p>
        </div>
      </div>
    </footer>
  );
};
