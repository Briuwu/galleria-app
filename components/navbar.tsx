"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="container border-b py-6">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <h1 className="sr-only">Galleria App</h1>
          <Image
            src={"/assets/shared/logo.svg"}
            alt=""
            width={140}
            height={48}
            className="w-[113px] object-cover"
          />
        </Link>
        <Button
          variant={"link"}
          className="p-0 text-[9px] uppercase tracking-[0.5em] text-grey-clr"
        >
          start slideshow
        </Button>
      </nav>
    </header>
  );
};
