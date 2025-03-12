import SectionHeading from "@/components/Helper/SectionHeading";
import ImageSlider from "./ImageSlider";

const ImageService = ({ imagesData }) => {
  return (
    <div className="py-20">
      {/* Section Heading  */}
      <SectionHeading
        heading="งานรับเหมาที่ให้บริการ"
        title="งานรับเหมาต่าง ๆ ที่ทางธีรพงษ์เซอร์วิสให้บริการในด้านงานก่อสร้าง"
      />
      {/* Section Content  */}
      <div className="mt-14 w-[80%] mx-auto">
        <ImageSlider imagesData={imagesData} />
      </div>
    </div>
  );
};
export default ImageService;
