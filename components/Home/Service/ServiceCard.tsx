import Image from "next/image";
import Link from "next/link";

interface Props {
  image: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
}

interface serviceType {
  service: {
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
  };
}

const ServiceCard = ({ service }: serviceType) => {
  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.substring(0, maxLength);
  };

  return (
    <div>
      <Link href={service.service_names.service_link}>
        <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
          {/* <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
          <FaHeart className="w-3 h-3 " />
        </div> */}
          {/* overlay  */}
          <div className="absolute inset-0 bg-black opacity-20 z-10"> </div>
          {/* Image  */}
          <Image
            src={`/${service.kw_img1}`}
            alt={service.topalt}
            width={500}
            height={500}
            className=" h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
          />
        </div>
        {/* Content  */}
        <div>
          <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all">
            {service.service_names.service_name}
          </h1>
          <p className="text-sm text-gray-600 mt-3 font-medium mb-6">
            {truncateTitle(service.kw_title, 50)}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default ServiceCard;
