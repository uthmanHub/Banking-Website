import Blog from "./components/Blog";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Saving from "./components/Saving";

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
