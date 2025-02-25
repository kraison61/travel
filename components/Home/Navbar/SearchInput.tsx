
interface Props  {
    type:string,
    placeholder?:string,
    classTailwind?:string,
    icon:React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const SearchInput = ({type,placeholder,classTailwind,icon:Icon}:Props) => {
  return (
    <div className="flex items-center space-x-6">
      {/* <Icon className="w-6 h-6 text-blue-600" /> */}
      <Icon className="w-6 h-6 text-blue-600" />
      <div>
        {/* <p className="text-lg font-medium mb-[0.2rem]">{label}</p> */}
        <input
          type={type}
          placeholder={placeholder}
          className={`outline-none border-none ${classTailwind || ''}`}
        />
      </div>
    </div>
  );
};
export default SearchInput;
