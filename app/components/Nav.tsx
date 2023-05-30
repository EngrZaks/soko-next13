"use client";
import Image from "next/image";
import Link from "next/link";
import router from "next/navigation";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  MdHome,
  MdOutlineFavorite as FavActive,
  MdOutlineFavoriteBorder as Fav,
} from "react-icons/md";

function Nav() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-md dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
        <Link href="/">
          <Image
            priority
            src={"/Soko.png"}
            alt="soko logo"
            height={40}
            width={30}
            className="ml-4"
          />
        </Link>
        <p className="font-bold text-lg text-center">Sokopoa </p>
        <HiMenuAlt2 className="text-xl mr-4" />
      </div>
      <div className="fixed bottom-0 left-0 flex w-full items-end justify-center pb-5 pt-5 border-t border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-md dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <Link href="/">
          <MdHome />
        </Link>
        <Link href="/favorites">
          <Fav />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
