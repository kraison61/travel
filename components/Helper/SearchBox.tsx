import { FaBinoculars } from "react-icons/fa6";
import SearchInput from "../Home/Navbar/SearchInput";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
      {/* 1st Search Input */}

      <SearchInput
        type="text"
        placeholder="Search / ค้นหา"
        classTailwind="outline-none border-none placeholder:text-gray-800"
        icon={FaBinoculars}
      />

      {/* 2nd Search Input */}

      {/* <SearchInput
        type="date"
        className="outline-none border-none"
        label="Start Date / วันเริ่ม"
        icon={FaCalendarWeek}
      /> */}

      {/* 3nd Search Input */}
      {/* <SearchInput
        type="date"
        className="outline-none border-none"
        label="End / วันเสร็จสิ้น"
        icon={FaCalendarWeek}
      /> */}

      {/* 4th Search Input */}
      {/* <SearchInput
        type="date"
        className="outline-none border-none"
        label="End / วันเสร็จสิ้น"
        icon={FaCalendarWeek}
      /> */}
    </div>
  );
};
export default SearchBox;
