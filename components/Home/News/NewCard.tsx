import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  date: string;
  title: string;
  id:string
};

const NewCard = ({ date, image, title,id }: Props) => {
  return (
    <div>
      {/* Image  */}
      <Link href="/news/{id}">
        <div className="relative h-[400px]">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Text Content  */}
        <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200">
          {title}
        </h1>
        <p className="text-sm text-gray-600 mt-3 ">{date}</p>
      </Link>
    </div>
  );
};
export default NewCard;
