import Image from "next/image";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="p-6">
      <nav className="flex items-center justify-between">
        <h1 className="sr-only">Galleria App</h1>
        <Image
          src={"/assets/shared/logo.svg"}
          alt=""
          width={140}
          height={48}
          className="w-[113px] object-cover"
        />
        <Button
          variant={"link"}
          className="text-grey-clr p-0 text-[9px] uppercase tracking-[0.5em]"
        >
          start slideshow
        </Button>
      </nav>
    </header>
  );
};
