import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="py-20">
      {/* Section Heading  */}
      <SectionHeading heading="ผลงานล่าสุด" />
      {/* Section Content  */}
      <div className="mt-14 w-[80%] mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};
export default Destination;
