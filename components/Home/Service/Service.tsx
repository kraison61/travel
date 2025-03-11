'use client'



import SectionHeading from "@/components/Helper/SectionHeading";
import ServiceSlider from "./ServiceSlider";

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

const Service = ({services}:{services:serviceType[] }) => {
  return (
    <div className="py-20">
      {/* Section Heading  */}
      <SectionHeading heading="งานรับเหมาที่ให้บริการ นะจ๊ะ" title="งานรับเหมาต่าง ๆ ที่ทางธีรพงษ์เซอร์วิสให้บริการในด้านงานก่อสร้าง" />
      {/* Section Content  */}
      <div className="mt-14 w-[80%] mx-auto">
        <ServiceSlider services={services} />
      </div>
    </div>
  );
};
export default Service;
