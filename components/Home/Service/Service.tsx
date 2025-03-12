import SectionHeading from "@/components/Helper/SectionHeading";
import ServiceCard from "./ServiceCard";

type serviceType = {
  id: number;
  service_id: number;
  kw_title: string;
  kw_des: string;
  kw_h1: string;
  kw_top1: string;
  kw_con1: string;
  kw_con2: string;
  kw_img1: string;
  kw_img2: string;
  created_at: string;
  updated_at: string;
  topalt: string;
  bottomalt: string;
  image?: string;
};

const Service = ({ services }: { services: serviceType[] }) => {
  // Change to serviceType[]
  return (
    <>
      <div className="py-20">
        {/* Section Heading */}
        <SectionHeading
          heading="ผลงานที่ให้บริการ"
          title="งานรับเหมา และบริการต่าง ๆ ที่ธีรพงษ์เซอร์วิสให้บริการ"
        />
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
          {/* ServiceCard */}
          {services.map((data, i) => (
            <div
              key={data.id}
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
            >
              <ServiceCard service={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
