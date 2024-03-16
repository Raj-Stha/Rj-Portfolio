import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import RootLayout from "./components/RootLayout";
import { Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useEffect(() => {
    // window.onbeforeunload = function () {
    //   window.scrollTo(0, 0);
    // };
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        className=" toast"
      />
    </>
  );
}

export default App;
