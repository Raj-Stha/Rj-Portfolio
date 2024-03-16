import { Input, Textarea } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ContactUs = () => {
  const data = useSelector((state) => state.userInfo.userData);
  const form = useRef();
  const contactSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[a-zA-Z_ ]*$/, "Name should only contain alphabets")
      .required("Required !!"),
    email: Yup.string().email("Invalid Email").required("Required !!"),
    message: Yup.string()
      .max(150, "Too long !!!")
      .min(3, "Too Short !!!")
      .required("Required !!"),
  });
  const [formSubmitted, setFormSubmmited] = useState(true);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (value, { resetForm }) => {
      emailjs
        .sendForm("service_51e8nfi", "template_0u778hk", form.current, {
          publicKey: "NWmUJ0z4KKnlh24N3",
        })
        .then(
          () => {
            setFormSubmmited(true);
            resetForm();
            toast(" ☑️ Submitted Successfully");
          },
          (error) => {
            toast.error(error);
          }
        );
    },
  });

  return (
    <>
      <div className={`w-[100%] ${data.darkMode ? "bg-black " : "bg-white"}`}>
        <div
          className="w-[78%] mx-auto pb-[6%] px-[3%]  pt-[2%]   section section-contact flex m-lg:w-[100%] m-sm:block m-sm:px-[5%] m-sm:pt-[3%]"
          id="contact"
        >
          <div className="mobile m-sm:pb-1">
            <h2
              className={`hidden m-sm:block m-sm:text-base font-semibold ${
                data.darkMode && "text-white"
              }`}
            >
              <span className="primary-color">Contact</span> Me
            </h2>
          </div>
          <div className="w-[45%] m-sm:hidden ">
            <h2
              className={`text-2xl font-semibold m-lg:text-xl  m-sm:text-base ${
                data.darkMode && "text-white"
              }`}
            >
              <span className="primary-color">Contact</span> Me
            </h2>

            <div className={`px-2  ${data.darkMode && "text-white"}`}>
              <div className=" pt-6 pb-6 m-lg:text-sm">
                <p className="font-semibold pb-2">Tell me about your project</p>
                <p>Let's Transform Ideas into Action! </p>
                <p>Drop us a line - we'd love to hear from you!"</p>
              </div>
              <div className="flex items-center space-x-4 m-lg:text-sm">
                <i
                  className={`fa-solid fa-envelope  ${
                    data.darkMode ? "text-white" : "primary-color"
                  }`}
                ></i>
                <a href="mailto:rajcrestha00@gmail.com">
                  rajcrestha00@gmail.com
                </a>
              </div>
              <div
                className={`flex space-x-3 text-2xl py-3 m-lg:text-base   ${
                  data.darkMode ? "text-white" : "primary-color"
                }`}
              >
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="w-[53%] m-sm:w-[100%] m-sm:text-xs   pt-1">
            <form ref={form} method="POST" onSubmit={formik.handleSubmit}>
              <div className="space-y-2 pb-4 ">
                {/* <label htmlFor="fullName" className="">
                Full Name
              </label> */}

                <Input
                  color="purple"
                  variant="static"
                  placeholder="John Doe"
                  className={`input-field m-sm:px-2 ${
                    data.darkMode && "input-darkMode"
                  } `}
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <h2 className="text-red-500">{formik.errors.fullName}</h2>
                )}
              </div>
              <div className="space-y-2 pb-2">
                {/* <label htmlFor="fullName" className="">
                Email
              </label> */}
                <Input
                  color="purple"
                  variant="static"
                  name="email"
                  placeholder="someone@gmail.com"
                  className={`input-field m-sm:px-2 ${
                    data.darkMode && "input-darkMode"
                  } `}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <h2 className="text-red-500">{formik.errors.email}</h2>
                )}
              </div>
              <div className="pb-4">
                {/* <label htmlFor="fullName" className="">
                Message
              </label> */}
                <Textarea
                  color="purple"
                  variant="static"
                  placeholder="Your Message"
                  className={`input-field message m-sm:px-2 ${
                    data.darkMode && "input-darkMode"
                  } `}
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.errors.message && formik.touched.message && (
                  <h2 className="text-red-500">{formik.errors.message}</h2>
                )}
              </div>
              <div className="w-[100%] flex justify-center">
                <button
                  type="submit"
                  className="mx-auto  bg-purple-400 px-5 py-3 m-lg:text-sm m-sm:text-xs m-sm:px-4  rounded-md text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
