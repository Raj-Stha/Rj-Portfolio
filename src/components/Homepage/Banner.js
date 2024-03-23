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
        <div className=" left w-[40%] h-[500px] m-md:w-[35%] m-2xl:h-[450px] m-xl:h-[400px] m-md:h-[380px]  flex  pt-[1%] m-lg:items-center justify-center  m-sm:hidden ">
          <img
            className="w-[50%] m-lg:w-[65%] m-md:w-[80%]  h-[100%] m-md:h-[90%]  "
            width="100%"
            height="auto"
            src="./images/profile.png"
            alt="Rj-profile | Raj Shrestha"
          />
        </div>

        <div className="left w-[45%]  m-lg:w-[50%] m-md:w-[55%]  text-justify pt-[6%] m-sm:w-[100%]">
          <h2 className="text-2xl py-1 m-lg:text-xl m-sm:text-base m-sm:pb-0 ">
            Raj Shrestha
          </h2>

          <h2 className="pb-[4%] m-lg:pb-[3%] text-base m-lg:text-sm primary-color m-sm:text-xs font-semibold m-sm:pb-[1%] m-sm:font-medium">
            Web Developer
          </h2>
          <div className="m-lg:text-sm leading-6 m-sm:text-xs m-sm:leading-5 m-sm:pt-[1%]">
            <p className="hey hidden m-sm:block">
              Ready to take your digital footprint to new heights? Explore Raj's
              latest projects, showcasing the fusion of innovation and
              expertise. From sleek user interfaces to robust backend solutions,
            </p>
            <p className="m-sm:hidden ">
              Welcome to the digital domain of Raj Shrestha, a seasoned
              full-stack web developer poised to elevate your online presence.
              With proficiency in ReactJS, NEXT.js, AngularJS, Tailwind CSS,
              PHP, Wordpres, Shopify, Wix and Express JS, Raj crafts dynamic and
              responsive websites that captivate audiences and drive results.
              Ready to take your digital footprint to new heights? Explore Raj's
              latest projects, showcasing the fusion of innovation and
              expertise. From sleek user interfaces to robust backend solutions,
              each creation reflects Raj's commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
