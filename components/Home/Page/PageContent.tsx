import React from "react";
import { FaStar } from "react-icons/fa6";

const PageContent = () => {
  return (
    <div className="py-40 flex items-center justify-center flex-col bg-white">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content  */}
        <div>
          <h1 className="text-2xl font-semibold text-blue-950">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-blue-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            dolorum. Illo nemo sapiente, soluta quis consectetur eum explicabo?
            Quo, perspiciatis inventore iusto sit enim maiores similique illo
            architecto autem nostrum tenetur molestiae dolor voluptatem aliquam
            consequatur illum placeat ratione. Unde repellat fugiat minima
            repudiandae ullam quos! Voluptates ullam similique tempora?
          </p>

          {/* Rating  */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white ">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default PageContent;
