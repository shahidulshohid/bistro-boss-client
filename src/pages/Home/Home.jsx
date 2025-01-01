import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefeRecommend from "./ChefeRecommend/ChefeRecommend";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefeRecommend></ChefeRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
