import { replace } from "formik";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const PageNotFound = () => {
  const nav = useNavigate();
  const data = useSelector((state) => state.userInfo.userData);
  console.log(data);
  return (
    <div
      className={`${
        data.darkMode ? "bg-black text-white" : ""
      } h-[91vh] w-[100%]  mt-[1px] flex justify-center `}
    >
      <div
        className={`h-[100%] w-[50%] pt-[3%]    flex justify-center items-center  `}
      >
        <div className="space-y-8  text-center px-4 m-3xl:space-y-4  m-md:space-y-3 ">
          <h2 className="text-7xl font-semibold primary-color m-3xl:text-5xl m-md:text-4xl m-sm:text-2xl">
            404
          </h2>
          <h2 className="font-semibold text-2xl m-3xl:text-lg m-md:text-base m-sm:text-sm">
            Page Not Found
          </h2>
          <button
            className="mx-auto  bg-purple-400 px-5 py-3 m-3xl:text-sm  m-lg:text-sm  m-md:px-4   m-sm:text-xs  m-sm:px-3  rounded-md text-white hover:bg-purple-500"
            onClick={() => {
              nav("/", replace);
            }}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
export default PageNotFound;
