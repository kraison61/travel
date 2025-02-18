import React from "react"
type Props = {
    heading: string;
}

const SectionHeading = ({heading}:Props) => {
  return (
    <div className="w-[80%] mx-auto">
        <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
        <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">รวมรูปภาพผลงานรับเหมาก่อสร้างล่าสุดของธีรพงษ์เซอร์วิส</p>
    </div>
  )
}
export default SectionHeading