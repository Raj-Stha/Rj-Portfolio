import { service } from "../../data/ServiceData";
import ServiceCardList from "../../snippets/ServiceCardList";
import { useSelector } from "react-redux";

const MyService = () => {
  const data = useSelector((state) => state.userInfo.userData);
  return (
    <div
      id="service"
      className={`section ${data.darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="w-[80%] mx-auto pt-[3%] px-[3%]  m-lg:w-[100%]  m-sm:px-[5%] m-sm:pt-[4%]">
        <h2
          className={`text-2xl m-lg:text-xl font-semibold pb-6  m-sm:text-base m-lg:pb-3 m-sm:pb-2 ${
            data.darkMode && "text-white"
          }`}
        >
          <span className="primary-color">My</span> Service
        </h2>
        <div className="flex justify-between space-x-6    m-md:space-x-4  m-sm:grid m-sm:space-x-0 m-sm:gap-4 m-sm:px-0">
          {service &&
            service.map((value, i) => {
              return (
                <ServiceCardList data={value} themeStatus={data} key={i} />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default MyService;
