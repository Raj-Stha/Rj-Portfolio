import Banner from "../components/Homepage/Banner";
import MyService from "../components/Homepage/MyService";
import LatestProject from "../components/Homepage/LatestProject";
import ContactUs from "../components/Homepage/ContactUs";
const Homepage = () => {
  return (
    <div className="pt-[2%]">
      <Banner />
      <MyService />
      <LatestProject />
      <ContactUs />
    </div>
  );
};
export default Homepage;
