import { projectList } from "../../data/ProjectList";
import { useSelector } from "react-redux";

const LatestProject = () => {
  const dark = useSelector((state) => state.userInfo.userData);

  return (
    <>
      <div className={`w-[100%] ${dark.darkMode ? "bg-black" : "bg-white"}`}>
        <div
          className={` w-[80%] mx-auto pb-[3%] pt-[3%] px-[3%] section-project section m-lg:w-[100%]  m-sm:px-[5%] m-sm:pt-[6%]   `}
          id="projects"
        >
          <h2
            className={`text-2xl font-semibold m-lg:text-xl pb-6 m-sm:text-base m-lg:pb-3 m-sm:pb-2  ${
              dark.darkMode && "text-white"
            } `}
          >
            <span className="primary-color">Latest</span> Project
          </h2>

          <div className="grid grid-cols-4 m-md:grid-cols-3 m-sm:grid-cols-2 gap-6 m-sm:gap-4 justify-center  w-[100%] h-[580px] m-lg:h-[500px] m-md:h-[800px] m-sm:h-[700px]">
            {projectList &&
              projectList.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      dark.darkMode === false && "shadow-md shadow-gray-400"
                    } relative w-[100%] h-[100%]  card-list overflow-hidden  rounded-[5px]`}
                  >
                    <a
                      href={`${data.projectURL}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="m-sm:inline-block absolute w-[100%] h-[100%]">
                        <img
                          className="w-[100%] h-[100%] object-cover "
                          src={`./images/projectImages/${data.imageURL}`}
                          alt={` ${data.imageAlt}`}
                        />
                      </div>

                      <div className=" card-content absolute bg-black opacity-[78%] w-[100%] h-[0%] bottom-0 overflow-hidden  text-white">
                        <div className="absolute top-[50%] translate-y-[-50%] py-2 px-4 space-y-4">
                          <h2 className="font-semibold text-center ">
                            {data.projectName}
                          </h2>
                          <p className=" text-center text-sm ">
                            {data.projectDescription}
                          </p>
                          <div className="">
                            <div className=" mx-auto rounded-full w-[40px]  h-[40px] bg-white text-purple-700 relative hover:scale-110 shadow-md shadow-purple-400 transition-transform duration-200">
                              <i className="fa-solid fa-arrow-up-right-from-square absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default LatestProject;
