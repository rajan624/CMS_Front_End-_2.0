import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.css";

const LoadingTesting = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <>
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{  y:1000, opacity: 0 }}
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
                <button onClick={onClose}>Close</button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{  y:-1000, opacity: 0 }}
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
              <button onClick={onClose}>Close</button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      </>
      )}
    </AnimatePresence>
  );
};

export default LoadingTesting;
