

import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = ({services}) => {
  return (
    <div className="py-20">
      {/* Section Heading  */}
      <SectionHeading heading="งานรับเหมาที่ให้บริการ" title="งานรับเหมาต่าง ๆ ที่ทางธีรพงษ์เซอร์วิสให้บริการในด้านงานก่อสร้าง" />
      {/* Section Content  */}
      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider services={services} />
      </div>
    </div>
  );
};
export default Destination;
