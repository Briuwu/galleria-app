import { getGallery, nextGalleryHref } from "@/actions/galleries";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import SlideControls from "./components/slide-controls";

const InnerGalleryPage = ({ params }: { params: { galleryId: string } }) => {
  const gallery = getGallery(params.galleryId);

  if (!gallery) return notFound();

  const nextPage = nextGalleryHref(params.galleryId);

  if (!nextPage) {
    redirect("/gallery/starry-night");
  }

  return (
    <div className="grid min-h-screen grid-rows-[1fr,75px]">
      <main className="container my-6">
        <div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gallery.images.hero.small} alt="" />
          </div>
          <div>
            <div>
              <h1>{gallery.name}</h1>
              <p>{gallery.artist.name}</p>
            </div>
            <Image
              src={gallery.artist.image.slice(1)}
              alt=""
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <span>{gallery.year}</span>
          <p>{gallery.description}</p>
          <Link href={gallery.source}>go to source</Link>
        </div>
      </main>
      <SlideControls
        galleryName={gallery.name}
        artistName={gallery.artist.name}
      />
    </div>
  );
};
export default InnerGalleryPage;
