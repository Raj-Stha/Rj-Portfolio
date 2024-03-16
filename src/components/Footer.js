import { useSelector } from "react-redux";

const Footer = () => {
  const year = new Date().getFullYear();
  const data = useSelector((state) => state.userInfo.userData);
  const scrolltop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={` pb-3 flex justify-end  ${
        data.darkMode ? "bg-black" : "bg-white"
      } `}
    >
      <div
        className={` flex justify-between px-4  w-[87%] m-lg:w-[100%] m-lg:pl-[6%] items-center ${
          data.darkMode ? "text-white" : "primary-color font-medium"
        }`}
      >
        <p className=" m-sm:text-xs">
          <span className="text-xl m-sm:text-sm">&copy;</span> Copyright {year}.
          All right reserved
        </p>
        <div className=" w-[18%]  pb-2 pr-[6%] m-lg:w-[10%]  m-sm:w-[14%]">
          <i
            className="fa-solid fa-arrow-up text-purple-50  text-lg px-4 py-2 bg-purple-500 rounded-full hover:bg-purple-900  shadow-lg hover:text-white m-lg:px-3 m-lg:py-1 m-sm:px-3 m-sm:py-1"
            onClick={scrolltop}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default Footer;
