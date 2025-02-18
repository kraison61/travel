import SectionHeading from "@/components/Helper/SectionHeading"
import ImageCard from "./ImageCard"
import { hotelsData } from "@/data/data"

const ImageService = () => {
  return (
    <div className="py-20">
        {/* Section Heading  */}
        <SectionHeading heading="ผลงานประเภทต่าง ๆ ที่ผ่านมา" />
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16" >
            {/* ImageCard  */}
            {
                hotelsData.map((data)=>{
                    return <div key={data.id} ><ImageCard image={data}  /></div>
                })
            }
        </div>
    </div>
  )
}
export default ImageService