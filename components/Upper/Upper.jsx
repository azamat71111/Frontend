import React from "react";
import styles from "./Upper.module.sass";
import { motion } from "framer-motion";

let leftVar = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (num) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};
let rightVar = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (num) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};
let topVar = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: (num) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};
let bottomVar = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: (num) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};

function Upper({ width }) {
  const Motion = () => {
    if (width > 800) {
      return (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={rightVar}
            custom={0}
            className={styles.grid_block}
          >
            <img alt="" src="/images/upper-1.svg" />
            <h2>Продать</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={topVar}
            custom={0}
            className={styles.grid_block}
          >
            <img alt="" src="/images/upper-2.svg" />
            <h2>Купить</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={leftVar}
            custom={0}
            className={styles.grid_block}
          >
            <img alt="" src="/images/upper-3.svg" />
            <h2>Оценка</h2>
          </motion.div>
        </>
      );
    } else {
      return (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={bottomVar}
            custom={0}
            className={styles.grid_block}
          >
            <img src="/images/upper-1.svg" />
            <h2>Продать</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={bottomVar}
            custom={0}
            className={styles.grid_block}
          >
            <img src="/images/upper-2.svg" />
            <h2>Купить</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={bottomVar}
            custom={0}
            className={styles.grid_block}
          >
            <img src="/images/upper-3.svg" />
            <h2>Оценка</h2>
          </motion.div>
        </>
      );
    }
  };
  return (
    <div className={styles.upper}>
      <div className={styles.upper_container}>
        <div className={styles.grid}>
          <Motion />
        </div>
      </div>
    </div>
  );
}

export default Upper;
