import Image from "next/image";

const SlideControls = ({
  galleryName,
  artistName,
}: {
  galleryName: string;
  artistName: string;
}) => {
  return (
    <div className="flex items-center justify-between bg-white-clr px-6 py-4">
      <div>
        <p>{galleryName}</p>
        <p>{artistName}</p>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src={"/assets/shared/icon-back-button.svg"}
          alt="Back Button"
          width={26}
          height={24}
        />
        <Image
          src={"/assets/shared/icon-next-button.svg"}
          alt="Next Button"
          width={26}
          height={24}
        />
      </div>
    </div>
  );
};
export default SlideControls;
