import React from "react";
import { motion } from "framer-motion";
import FeaturedPostStyle from "../../styles/ModuleCSS/Dashboard/FeaturedPost.module.css";
import { Avatar } from "@nextui-org/react";
import { StarIcon } from "../../Util/Icons";
const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];
function FeatruredPost() {
  return (
    <div className={FeaturedPostStyle.mainDiv}>
      <div className={FeaturedPostStyle.headingDiv}>
        <p className={FeaturedPostStyle.heading}>Featured Posts</p>
        <div className={FeaturedPostStyle.navDivider}></div>
      </div>
      <div className={FeaturedPostStyle.contentDiv}>
       
          <div style={{
            backgroundImage: `url(${images[1]})`,
            width: "60vw",
            height: "35vw",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }} className={FeaturedPostStyle.imageInDiv}>
            <div className={FeaturedPostStyle.imageInDiv1}>
              <div className={FeaturedPostStyle.imageInDiv11}>
                <StarIcon />
              </div>
              <div className={FeaturedPostStyle.imageInDiv12}>
                <h5>Technology</h5>
              </div>
            </div>
            <div className={FeaturedPostStyle.imageInDiv2}>
              <h3 className={FeaturedPostStyle.imageInDiv2H3}>
                A Transformative Journey
              </h3>
            </div>
          </div>
       
        <div className={FeaturedPostStyle.sideDiv}>
          <p className={FeaturedPostStyle.sideDivPara}>
            September 09 &#8226; 02 mins read
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatruredPost;
