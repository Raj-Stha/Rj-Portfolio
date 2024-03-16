import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/userSlice";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Header = () => {
  const data = useSelector((state) => state.userInfo.userData);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [currentClass, setClass] = useState("mobile-home");

  useEffect(() => {
    window.addEventListener("scroll", scrollLister);
  }, []);
  const scrollLister = () => {
    const nav = document.querySelectorAll(".nav-content");
    const section = document.querySelectorAll(".section");

    section.forEach((value) => {
      if (
        window.scrollY >= value.offsetTop - 270 &&
        window.scrollY <= value.offsetTop + value.offsetHeight - 150
      ) {
        nav.forEach((e) => {
          if (e.className.includes("active")) {
            e.classList.remove("active");
            document.querySelector(`#nav-${value.id}`).classList.add("active");
          }
        });
      }
    });
  };

  // const mobileActive = (value) => {
  //   const data = document.querySelector(`.${value}`).classList.add("ac");

  // };
  // const selectedLink = async (value) => {
  //   const element = document.querySelector(`#${value}`);
  //   const nav = document.querySelectorAll(".nav-content");
  //   if (element) {
  //     window.scrollTo({ top: element.offsetTop - 30, behavior: "smooth" });
  //     let count = 0;

  //     nav.forEach((e) => {
  //       count++;
  //       if (e.className.includes("active")) {
  //         e.classList.remove("active");
  //       }
  //     });
  //     if (count === nav.length) {
  //       document.querySelector(`.${value}`).classList.add("active");
  //     }
  //   }
  // };

  return (
    <div className="relative ">
      <div className="fixed top-0 w-[100%] z-30 bg-white  ">
        <div
          className={`${
            data.darkMode ? "bg-black text-white " : ""
          } flex justify-between items-center px-[2%] m-sm:px-[1%]  py-2 `}
        >
          <div className="left px-2 ">
            <h1
              className={`${
                data?.darkMode ? "text-white " : "primary-color"
              } text-2xl  font-semibold m-md:text-xl m-sm:text-lg`}
            >
              Rj Portfolio
            </h1>
          </div>

          <div
            className="right flex items-center space-x-4 px-4 navlink m-sm:hidden"
            id="navlink"
          >
            <Link
              className={`nav-content active`}
              id="nav-home"
              to="home"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="nav-content"
              to="service"
              id="nav-service"
              offset={-20}
              smooth={true}
              duration={500}
            >
              Services
            </Link>
            <Link
              className="nav-content"
              to="projects"
              id="nav-projects"
              smooth={true}
              offset={-20}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="nav-content nav-contact"
              to="contact"
              id="nav-contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>

            <p
              onClick={() => {
                dispatch(setTheme({ darkMode: !data.darkMode }));
              }}
              className="cursor-pointer darkmode"
            >
              <i className="fa-solid fa-circle-half-stroke text-2xl"></i>
            </p>
          </div>

          <div className="end hidden m-sm:block ">
            <div
              className="pr-4  m-sm:pr-6"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <i
                className={`fa-solid fa-bars text-lg ${
                  menu && "primary-color"
                }`}
              ></i>
            </div>
          </div>
        </div>
        {menu && (
          <div className="relative hidden  m-sm:block  ">
            <div className="absolute  right-[4%] px-2   z-30 bg-white">
              <div className="flex flex-col pt-3 space-y-1 text-sm ">
                <Link
                  className={`${currentClass === "mobile-home" && "active"}`}
                  id="mobile-home"
                  to="home"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={(e) => {
                    setClass(e.target.id);
                    setMenu(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  className={`${currentClass === "mobile-service" && "active"}`}
                  to="service"
                  id="mobile-service"
                  offset={-28}
                  smooth={true}
                  duration={500}
                  onClick={(e) => {
                    setClass(e.target.id);
                    setMenu(false);
                  }}
                >
                  Services
                </Link>
                <Link
                  className={`${
                    currentClass === "mobile-projects" && "active"
                  }`}
                  to="projects"
                  id="mobile-projects"
                  smooth={true}
                  offset={-28}
                  duration={500}
                  onClick={(e) => {
                    setClass(e.target.id);
                    setMenu(false);
                  }}
                >
                  Projects
                </Link>
                <Link
                  className={`${currentClass === "mobile-contact" && "active"}`}
                  to="contact"
                  id="mobile-contact"
                  smooth={true}
                  duration={500}
                  onClick={(e) => {
                    setClass(e.target.id);
                    setMenu(false);
                  }}
                >
                  Contact
                </Link>
              </div>
              <h3
                onClick={(e) => {
                  dispatch(setTheme({ darkMode: !data.darkMode }));
                  setClass(e.target.id);
                  setMenu(false);
                }}
                className={`${
                  currentClass === "darkmode" && "active"
                } cursor-pointer darkmode text-sm pb-2`}
                id="darkmode"
              >
                DarkMode
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
