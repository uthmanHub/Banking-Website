import Blog from "./component/Blog";
import Download from "./component/Download";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Home from "./component/Home";
import HowItWorks from "./component/HowItWorks";
import Pricing from "./component/Pricing";
import Review from "./component/Review";
import Saving from "./component/Saving";

const page = () => (
  <div className='overflow-hi den '>
    <Home />
    <Features />
    <Saving />
    <HowItWorks />
    <Review />
    <Pricing />
    <Blog />
    <Download />
    <Footer />
  </div>
);

export default page;
