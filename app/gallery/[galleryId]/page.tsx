const InnerGalleryPage = ({ params }: { params: { galleryId: string } }) => {
  return <main className="container">{params.galleryId}</main>;
};
export default InnerGalleryPage;
