"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { HamburguerIcon } from "../atoms/hamburguer-icon";
import { useRouter } from "next/navigation";
import { SelectTranslation } from "./select-translation";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "@/hooks/use-media-query";
import { scrollToSection } from "@/utils/scroll-to-section";
import { useRefStore } from "../stores/ref-store";

interface Props {
  children: ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  //States and Hooks
  const translations = useTranslations("navbar");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const [openNavbar, setOpenNavbar] = useState(false);
  const { ref_AboutSection, ref_DownloadSection } =
    useRefStore();

  //Handlers
  const handleOpenNavbar = () => {
    setOpenNavbar((oldState) => !oldState);
  };

  return (
    <div className="relative">
      <header className="flex items-center justify-between bg-secondary px-5 py-3">
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        {isDesktop ? (
          <>
            <div className="z-10 flex flex-row items-center">
              <ul className="flex flex-row gap-16 text-center text-primary">
                <li
                  className="cursor-pointer"
                  onClick={() => scrollToSection(ref_AboutSection)}
                >
                  {translations("about")}
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => scrollToSection(ref_DownloadSection)}
                >
                  {translations("download")}
                </li>
                {/* <li
                  className="cursor-pointer"
                  onClick={() => scrollToSection(ref_TalkToUsSection)}
                >
                  {translations("contact")}
                </li> */}
              </ul>
            </div>
            <SelectTranslation />
          </>
        ) : (
          <div className="flex flex-row items-center">
            {/* <SelectTranslation /> */}
            <HamburguerIcon
              openNavbar={openNavbar}
              handleOpenNavbar={handleOpenNavbar}
            />
          </div>
        )}
      </header>
      {openNavbar && (
        <nav className="absolute top-16 z-50 flex h-full w-screen items-start justify-center rounded-lg bg-secondary laptop:bottom-0 laptop:right-0 laptop:mx-3 laptop:h-52 laptop:w-52">
          <ul className="mt-28 flex flex-col gap-5 p-8 text-center text-2xl text-primary laptop:mt-0">
            <li
              className="cursor-pointer"
              onClick={() => {
                scrollToSection(ref_AboutSection);
                setOpenNavbar(false);
              }}
            >
              {translations("about")}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                scrollToSection(ref_DownloadSection);
                setOpenNavbar(false);
              }}
            >
              {translations("download")}
            </li>
            <li className="mt-12">
              <SelectTranslation />
            </li>
            {/* <li
              className="cursor-pointer"
              onClick={() => {
                scrollToSection(ref_TalkToUsSection);
                setOpenNavbar(false);
              }}
            >
              {translations("contact")}
            </li> */}
          </ul>
        </nav>
      )}

      <main>{children}</main>
    </div>
  );
};
