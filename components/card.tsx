import { Gallery } from "@/lib/types";
import Link from "next/link";

type Props = {
  gallery: Gallery;
};

export const Card = ({ gallery }: Props) => {
  return (
    <article className="group relative">
      <Link href={`/gallery/${gallery.href}?idx=${gallery.index}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={gallery.images.gallery.slice(1)} alt={gallery.name} />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-transparent group-hover:bg-white/50" />
        <div className="absolute bottom-0 p-8 text-white-clr">
          <h2 className="text-2xl font-bold">{gallery.name}</h2>
          <p className="text-[13px] opacity-75">{gallery.artist.name}</p>
        </div>
      </Link>
    </article>
  );
};
