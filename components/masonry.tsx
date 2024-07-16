"use client";
import { useEffect, useState } from "react";
import { getGalleries } from "@/actions/galleries";
import { Card } from "./card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const MasonryComponent = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  if (!hasLoaded) return null;

  const galleries = getGalleries();
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 375: 1, 570: 2, 900: 3, 1200: 4 }}
      className="my-6"
    >
      <Masonry gutter="1.5em">
        {galleries.map((params) => (
          <Card key={params.name} gallery={params} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
