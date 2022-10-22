import React from "react";
import Banner from "../Banner/Banner";
import OurServices from "../OurServices/OurServices";
import YearsOfExperience from "../YearsOfExperience/YearsOfExperience";
import HospitalFeature from "../HospitalFeature/HospitalFeature";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import WhatTheySay from "../WhatTheySay/WhatTheySay";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <YearsOfExperience></YearsOfExperience>
      <HospitalFeature></HospitalFeature>
      <FaqQuestion></FaqQuestion>
      <WhatTheySay></WhatTheySay>
    </div>
  );
};

export default Home;
