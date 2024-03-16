const ServiceCardList = ({ data, themeStatus }) => {
  return (
    <>
      <div
        className={`px-5 py-5 rounded-[5px] space-y-3 hover-effect  cursor-pointer select-none m-lg:px-3 m-lg:py-3 m-sm:px-2 m-sm:py-2 ${
          themeStatus.darkMode
            ? "darMode-card-bg-color "
            : "lightMode-card-bg-color "
        }`}
      >
        <i
          className={`text-3xl primary-color m-lg:text-xl m-sm:text-lg ${data.iconClass}`}
        ></i>
        <h3 className="text-lg m-lg:text-base font-semibold m-sm:text-sm">
          {data.title}
        </h3>
        <p className="text-justify m-lg:text-sm">{data.content}</p>
        <h4 className="font-semibold  m-lg:font-medium m-sm:text-sm">
          Read More
        </h4>
      </div>
    </>
  );
};
export default ServiceCardList;
