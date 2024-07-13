import data from "@/lib/data.json";

export const getGalleries = () => {
  return data.map((gallery) => {
    return {
      galleryHref: gallery.name.replace(/\s+/g, "-").toLowerCase(),
      galleryName: gallery.name,
      galleryArtistName: gallery.artist.name,
      galleryImg: gallery.images.gallery,
    };
  });
};

export const getGallery = (galleryHref: string) => {
  return data.find(
    (gallery) =>
      gallery.name.replace(/\s+/g, "-").toLowerCase() === galleryHref,
  );
};

export const nextGalleryHref = (galleryHref: string) => {
  const index = data.findIndex(
    (gallery) =>
      gallery.name.replace(/\s+/g, "-").toLowerCase() === galleryHref,
  );

  if (index === -1 || index === data.length - 1) return null;

  return data[index + 1].name.replace(/\s+/g, "-").toLowerCase();
};
