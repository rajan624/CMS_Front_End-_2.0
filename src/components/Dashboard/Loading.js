import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/ModuleCSS/Dashboard/Loading.module.css";

function Loading({ isOpen, onClose, children }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: 1000, opacity: 0 }}
            transition={{ duration: 3 }}
            // Set mode to 'wait' to replace exitBeforeEnter
            mode="wait"
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <div className={styles.upperPart}>
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  exit={{ y: 1000 }}
                >
                  {children}
                </motion.div>
              </div>
              <div className={styles.lowerPart}>
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: -1000 }}
                >
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 3 }}
            // Set mode to 'wait' to replace exitBeforeEnter
            mode="wait"
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <div className={styles.upperPart}>
                <motion.div
                  initial={{ y: -50 }}
                  animate={{ y: 0 }}
                  exit={{ y: 1000 }}
                >
                </motion.div>
              </div>
              <div className={styles.lowerPart}>
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: -1000 }}
                >
                  <motion.div
                    className="box"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <img alt="Next.js Logo" src={"/Logo.png"} />
                    <button onClick={onClose}>Close</button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
         
        </>
      )}
    </AnimatePresence>
  );
}

export default Loading;
