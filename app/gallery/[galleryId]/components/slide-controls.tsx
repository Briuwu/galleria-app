"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

import { dataWithProgress } from "@/actions/galleries";

type Props = {
  galleryName: string;
  artistName: string;
  progressValue: number;
};

const SlideControls = ({ galleryName, artistName, progressValue }: Props) => {
  const [isFirstGallery, setIsFirstGallery] = useState(false);
  const [isLastGallery, setIsLastGallery] = useState(false);

  const searchParams = useSearchParams();
  const searchParamsIdx = parseInt(searchParams.get("idx") || "0");
  const router = useRouter();

  useEffect(() => {
    if (searchParamsIdx === 0) {
      setIsFirstGallery(true);
    } else if (searchParamsIdx === dataWithProgress.length - 1) {
      setIsLastGallery(true);
    }
  }, [searchParamsIdx]);

  const onNextGallery = () => {
    const index = searchParamsIdx + 1;
    ``;
    const galleryName = dataWithProgress[index].name
      .replace(/\s+/g, "-")
      .toLowerCase();
    router.push(`/gallery/${galleryName}?idx=${index}`);
  };

  const onPreviousGallery = () => {
    const index = searchParamsIdx - 1;
    const galleryName = dataWithProgress[index].name
      .replace(/\s+/g, "-")
      .toLowerCase();
    router.push(`/gallery/${galleryName}?idx=${index < 0 ? 0 : index}`);
  };

  return (
    <div>
      <Progress value={progressValue} className="h-1" />
      <div className="flex items-center justify-between bg-white-clr px-6 py-4">
        <div>
          <p className="text-sm font-bold">{galleryName}</p>
          <p className="text-[10px] text-grey-clr">{artistName}</p>
        </div>
        <div className="flex items-center gap-6">
          <Button
            variant={"ghost"}
            onClick={onPreviousGallery}
            disabled={isFirstGallery}
          >
            <Image
              src={"/assets/shared/icon-back-button.svg"}
              alt="Back Button"
              width={26}
              height={24}
            />
          </Button>
          <Button
            variant={"ghost"}
            onClick={onNextGallery}
            disabled={isLastGallery}
          >
            <Image
              alt="Next Button"
              src={"/assets/shared/icon-next-button.svg"}
              width={26}
              height={24}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SlideControls;
