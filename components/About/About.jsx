import React from "react";
import styles from "./About.module.sass";
import Link from "next/link";
import { motion } from "framer-motion";

let VarImg = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  }),
};
let VarBlock = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  }),
};
let VarImgForPhone = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
let VarBlockForPhone = {
  hidden: {
    opacity: 0,
    scaleX: 0.6,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export default function About({ width }) {
  const Motion = () => {
    if (width > 900) {
      return (
        <>
          <motion.div
            className={styles.info}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={VarImg}
          >
            <div className={styles.titles}>
              <h2 className={styles.about__h2}>О Нас</h2>
              <h2 className={styles.about__description}>
                Мы подберем вам уникальные дизайн
              </h2>
            </div>
            <Link href="/About">
              <span className={styles.about__link}>Узнать еще</span>
            </Link>
          </motion.div>
          <motion.div
            className={styles.img}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={VarBlock}
          >
            <img src="images/design.png" alt="" className={styles.img__about} />
          </motion.div>
        </>
      );
    } else {
      return (
        <>
          <motion.div
            className={styles.info}
            initial="hidden"
            whileInView="animate"
            variants={VarBlockForPhone}
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <div className={styles.titles}>
              <h2 className={styles.about__h2}>О Нас</h2>
              <h2 className={styles.about__description}>
                Мы подберем вам уникальные дизайн
              </h2>
            </div>
            <Link href="/About">
              <span className={styles.about__link}>Узнать еще</span>
            </Link>
          </motion.div>
          <motion.div
            className={styles.img}
            initial="hidden"
            whileInView="animate"
            variants={VarImgForPhone}
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <img src="images/design.png" alt="" className={styles.img__about} />
          </motion.div>
        </>
      );
    }
  };
  return (
    <header className={styles.about}>
      <div className={styles.container}>
        <div className={styles.block}>
          <Motion />
        </div>
      </div>
    </header>
  );
}
