import { Card } from "./card";
import masonryData from "@/lib/data.json";

export const Masonry = () => {
  return (
    <div className="masonry sm:masonry-sm md:masonry-md lg:masonry-lg my-6 space-y-6">
      {masonryData.map((item) => (
        <Card key={item.name} gallery={item} />
      ))}
    </div>
  );
};
