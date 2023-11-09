import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ImageAnimatePresenceStyle from "../../styles/ModuleCSS/Dashboard/ImageAnimatePresence.module.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];
const ImageAnimatePresence = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <motion.div className={ImageAnimatePresenceStyle.mainDiv}>
      <motion.div
        onClick={() => paginate(-1)}
        className={ImageAnimatePresenceStyle.buttonNextPrev}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      ></motion.div>
      <AnimatePresence initial={false} custom={direction}>
        <div className={ImageAnimatePresenceStyle.imageSideDiv}>
          <motion.div
            key={page}
            style={{
              backgroundImage: `url(${images[imageIndex]})`,
              width: "60vw",
              height: "35vw",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            // src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            className={ImageAnimatePresenceStyle.image}
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 30 },
              //   opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 500, right: 500 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          ></motion.div>
          <div className={ImageAnimatePresenceStyle.sideDiv} >
            <p className={ImageAnimatePresenceStyle.sideDivPara} >
                September 09 &#8226; 02 mins read
            </p>
          </div>
        </div>
      </AnimatePresence>
      <motion.div
        onClick={() => paginate(1)}
        className={ImageAnimatePresenceStyle.buttonNextPrev}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      ></motion.div>
    </motion.div>
  );
};

export default ImageAnimatePresence;

{
  /* <div className={ImageAnimatePresenceStyle.prev} onClick={() => paginate(-1)}>
{"‣"}
</div> */
}
{
  /* <div className={ImageAnimatePresenceStyle.next} onClick={() => paginate(1)}> */
}
{
  /* </div> */
}
