import { useSelector } from "react-redux";

const Banner = () => {
  const data = useSelector((state) => state.userInfo.userData);
  return (
    <div className="section" id="home">
      <div
        className={`${
          data.darkMode ? "bg-black text-white  " : ""
        } flex space-x-6 m-sm:space-x-0 m-sm:px-[4%] pt-[1%] m-lg:pt-[2%] m-sm:pt-[5%]`}
      >
        <div className="  left w-[40%]  m-md:w-[35%]  flex  pt-[1%] m-lg:items-center justify-center  m-sm:hidden ">
          <img
            className="w-[50%] m-lg:w-[50%] m-md:w-[80%] m-md:h-[90%] h-auto"
            src="./images/profile.png"
            av
            alt="Rj-profile | Raj Shrestha"
          />
        </div>

        <div className="left w-[45%]  m-lg:w-[50%] m-md:w-[55%]  text-justify pt-[6%] m-sm:w-[100%]">
          <h2 className="text-2xl py-1 m-lg:text-xl m-sm:text-base m-sm:pb-0 ">
            Raj Shrestha
          </h2>

          <h2 className="pb-[6%] text-base m-lg:text-sm primary-color m-sm:text-xs font-semibold m-sm:pb-[1%] m-sm:font-medium">
            Web Developer
          </h2>
          <p className="m-lg:text-sm m-sm:text-xs m-sm:leading-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            dolore hic eius, aspernatur tempore nesciunt atque aliquam corporis,
            sint pariatur repudiandae neque quas. Soluta ea suscipit ad labore
            <span className="m-sm:hidden">
              porro libero? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Nostrum repudiandae atque itaque tenetur ullam assumenda
              quas possimus maiores consectetur iusto tempore, modi quidem
              architecto earum in perferendis eum ab explicabo.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
