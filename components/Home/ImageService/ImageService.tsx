import SectionHeading from "@/components/Helper/SectionHeading";
import { hotelsData } from "@/data/data";
import ImageCard from "./ImageCard";

const ImageService = () => {
  return (
    <>
      <div className="py-20">
        {/* Section Heading  */}
        <SectionHeading
          heading="ภาพผลงานประเภทต่าง ๆ ที่ผ่านมา"
          title="รวมรูปผลงาน โดยการแยกตามประเภทต่าง ๆ ที่ผ่านมา "
        />
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
          {/* ImageCard  */}
          {hotelsData.map((data, i) => {
            return (
              <div
                key={data.id}
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${i * 100}`}
              >
                <ImageCard image={data} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ImageService;
