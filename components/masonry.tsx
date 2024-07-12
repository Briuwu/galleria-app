"use client";
import { Card } from "./card";
import masonryData from "@/lib/data.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const MasonryComponent = () => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 375: 1, 570: 2, 900: 3, 1200: 4 }}
      className="my-6"
    >
      <Masonry gutter="1.5em">
        {masonryData.map((item) => (
          <Card key={item.name} gallery={item} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
