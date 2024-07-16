import Image from "next/image";
import { notFound } from "next/navigation";

import SlideControls from "./components/slide-controls";

import { getGallery } from "@/actions/galleries";
import { FadeIn } from "@/components/fade-in";

type Props = {
  params: { galleryId: string };
  searchParams: { index: string };
};
const InnerGalleryPage = ({ params }: Props) => {
  const gallery = getGallery(params.galleryId);

  if (!gallery) return notFound();

  return (
    <div className="grid min-h-screen grid-rows-[1fr,75px]">
      <main className="container my-6 space-y-[172px] md:space-y-[139px] lg:grid lg:grid-cols-2">
        <FadeIn className="relative mx-auto md:max-w-3xl lg:m-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery.images.hero.small.slice(1)}
            alt={gallery.name}
            className="block object-contain md:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery.images.hero.large.slice(1)}
            alt={gallery.name}
            className="hidden max-w-[475px] object-contain md:block"
          />
          <div className="absolute -bottom-32 flex max-w-[280px] flex-col md:right-0 md:top-0 md:max-w-[445px] lg:-right-10 lg:h-full lg:justify-between">
            <div className="bg-white p-6 md:space-y-6 md:pb-16 md:pl-16">
              <h1 className="text-2xl font-bold md:text-6xl">{gallery.name}</h1>
              <p className="text-sm text-grey-clr">{gallery.artist.name}</p>
            </div>
            <Image
              src={gallery.artist.image.slice(1)}
              alt={gallery.artist.name}
              width={128}
              height={128}
              className="aspect-square w-16 object-contain md:w-[128px] md:self-end"
            />
          </div>
        </FadeIn>
        <FadeIn className="relative">
          <span className="absolute -top-24 right-0 -z-0 text-[100px] font-bold text-very-light-grey-clr md:-top-36 md:left-0 md:text-[200px] lg:-top-40 lg:left-52">
            {gallery.year}
          </span>
          <p className="relative z-10 mx-auto max-w-[457px] text-sm text-grey-clr lg:max-w-[350px] lg:leading-loose">
            {gallery.description}
          </p>
        </FadeIn>
      </main>
      <SlideControls
        artistName={gallery.artist.name}
        galleryName={gallery.name}
        progressValue={gallery.progress}
      />
    </div>
  );
};
export default InnerGalleryPage;
