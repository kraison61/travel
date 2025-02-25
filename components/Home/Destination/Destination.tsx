import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";
import DefaultDestinatination from "./DefaultDestinatination";

const Destination = () => {
  return (
    <div className="py-20">
      {/* Section Heading  */}
      <SectionHeading heading="ผลงานล่าสุด" title="รวมรูปภาพผลงานการรับเหมาก่อสร้างล่าสุดของธีรพงษ์เซอร์วิส" />
      {/* Section Content  */}
      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};
export default Destination;
