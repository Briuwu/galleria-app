import data from "@/lib/data.json";

export const dataWithProgress = data.map((gallery, index) => {
  const progressIncrement = 100 / (data.length - 1 || 1);
  return {
    ...gallery,
    progress: index * progressIncrement,
    index,
  };
});

export const getGalleries = () => {
  return dataWithProgress.map((gallery) => {
    return {
      href: gallery.name.replace(/\s+/g, "-").toLowerCase(),
      ...gallery,
    };
  });
};

export const getGallery = (galleryHref: string) => {
  return dataWithProgress.find(
    (gallery) =>
      gallery.name.replace(/\s+/g, "-").toLowerCase() === galleryHref,
  );
};
