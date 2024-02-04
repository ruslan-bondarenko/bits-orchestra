"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Logo, Menu } from "@/shared/assets";
import { NavBar } from "@/widgets";
import {
  Button,
  ButtonVariantEnum,
  BurgerButton,
  MenuContainer,
} from "@/shared/ui";
import { useAppSelector } from "@/base/store";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import clsx from "clsx";

const Header = () => {
  const isMenuOpen = useAppSelector((state) => state.header.isMenuOpen);

  useEffect(() => {
    const bodyElement = document.body;

    if (isMenuOpen) {
      disableBodyScroll(bodyElement);
    } else {
      enableBodyScroll(bodyElement);
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-black w-full flex items-center px-10 py-3 flex items-center justify-between">
      <Link className="flex items-center justify-center w-24" href="/">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
        />
      </Link>
      <NavBar />
      <Button
        className="hidden sm:flex h-6 md:w-36"
        variant={ButtonVariantEnum.WHITE}
      >
        <span className="text-sm font-normal">Book a call</span>
      </Button>
      <div className="sm:hidden relative w-fit h-full shrink-0 flex items-center">
        <BurgerButton className="group-hover:pointer-events-none" />
        <MenuContainer
          className={clsx(
            "fixed top-16 bg-black z-10 left-0 bottom-0 w-screen translate-x-[110%]",
            "transition-all ease-linear",
            {
              "!translate-x-0": isMenuOpen,
            }
          )}
        />
      </div>
    </header>
  );
};

export default Header;
