import React from "react"
type Props = {
    heading: string;
    title?: string
}

const SectionHeading = ({heading,title}:Props) => {
  return (
    <div className="w-[80%] mx-auto">
        <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
        <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">{title}</p>
    </div>
  )
}
export default SectionHeading