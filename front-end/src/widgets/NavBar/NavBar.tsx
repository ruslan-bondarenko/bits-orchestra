import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  className?: string;
};

import { useHeaderActions } from "@/base/store";

const NavBar: FC<Props> = ({ className }) => {
  const { closeMenu } = useHeaderActions();

  return (
    <ul
      className={clsx(
        "hidden sm:flex items-center gap-4 text-sm text-gray-100 text-m",
        className
      )}
    >
      <li
        className="hover:text-tone-700 transition-all ease-linear"
        onClick={() => closeMenu()}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className="hover:text-tone-700 transition-all ease-linear"
        onClick={() => closeMenu()}
      >
        <Link href="/reviews">Reviews</Link>
      </li>
    </ul>
  );
};

export default NavBar;
