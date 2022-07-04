import React, { useEffect, useState } from "react";
import styles from "./MainHead.module.sass";
import { motion } from "framer-motion";

const variantImgForPhone = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    x: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const variantCartForPhone = {
  hidden: {
    opacity: 0,
    scaleX: 0.6,
    y: "-50%",
    x: "50%",
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    y: "-50%",
    x: "50%",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
const variantImg = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const variantCart = {
  hidden: {
    opacity: 0,
    x: "calc(100% + 80px)",
    y: "-50%",
  },
  animate: {
    opacity: 1,
    x: "100%",
    y: "-50%",
    transition: {
      duration: 0.5,
    },
  },
};
export default function MainHead({ width }) {
  const Motion = () => {
    if (width > 900) {
      return (
        <div className={styles.main__img}>
          <motion.img
            initial="hidden"
            animate="animate"
            variants={variantImg}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            src="/images/mainPhoto.png"
            alt="Eurasia photo"
          />
          <motion.div
            initial="hidden"
            animate="animate"
            variants={variantCart}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className={styles.main__cart}
          >
            <span className={styles.new__text}>NEW</span>
            <h4 className={styles.cart__title}>Новые квартиры</h4>
            <h4 className={styles.cartSub__title}>По новым стандартам</h4>
          </motion.div>
        </div>
      );
    } else {
      return (
        <div className={styles.main__img}>
          <motion.img
            initial="hidden"
            animate="animate"
            variants={variantImgForPhone}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            src="/images/mainPhoto.png"
            alt="Eurasia photo"
          />
          <motion.div
            initial="hidden"
            animate="animate"
            variants={variantCartForPhone}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className={styles.main__cart}
          >
            <span className={styles.new__text}>NEW</span>
            <h4 className={styles.cart__title}>Новые квартиры</h4>
            <h4 className={styles.cartSub__title}>По новым стандартам</h4>
          </motion.div>
        </div>
      );
    }
  };
  return (
    <header className={styles.head}>
      <main className={styles.container}>
        <div className={styles.main__content}>
          <Motion />
        </div>
      </main>
    </header>
  );
}
