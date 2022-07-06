import React from "react";
import styles from "./Cart.module.sass";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const CartVariant = {
  hidden: {
    y: "100%",
  },
  animate: {
    y: "0",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      duration: 0.3,
    },
  },
  end: {
    y: "100%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.3,
    },
  },
  margin: {
    amount: 0.8,
  },
};
const CartVarS = {
  hidden: {
    opacity: 0,
    x: "100px",
  },
  animate: (num) => ({
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};
const CartVarSForPhone = {
  hidden: {
    opacity: 0,
    y: "50px",
  },
  animate: (num) => ({
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};
export default function Cart({ width }) {
  const Motion = () => {
    if (width > 900) {
      return (
        <>
          <motion.li
            className={styles.cart__item}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            custom={1}
            variants={CartVarS}
          >
            <div className={styles.cart__img}>
              <img src="/images/cart__1.png" alt="eurasia cart" />
            </div>
            <AnimatePresence>
              <motion.div
                className={styles.cart__content}
                initial="hidden"
                whileInView="animate"
                exit="end"
                viewport="margin"
                variants={CartVariant}
              >
              <Link href="/About">
                <h4 className={styles.cartContent__title}>О нас</h4>
              </Link>               </motion.div>
            </AnimatePresence>
          </motion.li>
          <motion.li
            className={styles.cart__item}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            custom={2}
            variants={CartVarS}
          >
            <div className={styles.cart__img}>
              <img src="/images/cart__1.png" alt="eurasia cart" />
            </div>
            <AnimatePresence>
              <motion.div
                className={styles.cart__content}
                initial="hidden"
                whileInView="animate"
                exit="end"
                viewport="margin"
                variants={CartVariant}
              >
                <Link href="/#apartments">
                  <h4 className={styles.cartContent__title}>Наши объекты</h4>
              </Link>               </motion.div>
            </AnimatePresence>
          </motion.li>
          <motion.li
            className={styles.cart__item}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            custom={3}
            variants={CartVarS}
          >
            <div className={styles.cart__img}>
              <img src="/images/cart__1.png" alt="eurasia cart" />
            </div>
            <AnimatePresence>
              <motion.div
                className={styles.cart__content}
                initial="hidden"
                whileInView="animate"
                exit="end"
                viewport="margin"
                variants={CartVariant}
              >
              <Link href="/#contacts">
                <h4 className={styles.cartContent__title}>Наши контакты</h4>
              </Link>               </motion.div>
            </AnimatePresence>
          </motion.li>
        </>
      );
    } else {
      return (
        <>
          <motion.li
            className={styles.cart__item}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            custom={1}
            variants={CartVarSForPhone}
          >
            <div className={styles.cart__img}>
              <img src="/images/cart__1.png" alt="eurasia cart" />
            </div>
            <AnimatePresence>
              <motion.div
                className={styles.cart__content}
                initial="hidden"
                whileInView="animate"
                exit="end"
                viewport="margin"
                variants={CartVariant}
              >
              <Link href="/About">
                <h4 className={styles.cartContent__title}>О нас</h4>
              </Link> 
              </motion.div>
            </AnimatePresence>
          </motion.li>
          <motion.li
            className={styles.cart__item}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            custom={2}
            variants={CartVarSForPhone}
          >
            <div className={styles.cart__img}>
              <img src="/images/cart__1.png" alt="eurasia cart" />
            </div>
            <AnimatePresence>
              <motion.div
                className={styles.cart__content}
                initial="hidden"
                whileInView="animate"
                exit="end"
                viewport="margin"
                variants={CartVariant}
              >
                <h4 className={styles.cartContent__title}>Наши объекты</h4>
              </motion.div>
            </AnimatePresence>
          </motion.li>
          <motion.li
            className={styles.cart__item}
            initial="hidden"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            custom={3}
            variants={CartVarSForPhone}
          >
            <div className={styles.cart__img}>
              <img src="/images/cart__1.png" alt="eurasia cart" />
            </div>
            <AnimatePresence>
              <motion.div
                className={styles.cart__content}
                initial="hidden"
                whileInView="animate"
                exit="end"
                viewport="margin"
                variants={CartVariant}
              >
            <Link href="/#contacts">
                <h4 className={styles.cartContent__title}>Наши контакты</h4>
              </Link>               </motion.div>
            </AnimatePresence>
          </motion.li>
        </>
      );
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title__list}>
        <h2 className={styles.title}>НАША КОМПАНИЯ</h2>
        <h2 className={styles.main__title}>
          Мы занимаемся оценкой, продажой и покупкой квартир.{" "}
          <span className={styles.block}>
            Мы поможем вам продать вашу квартиру по очень выгодным вам ценам
          </span>
        </h2>
        <button className={styles.moreInfo}>Узнать больше</button>
      </div>
      <ul className={styles.cart__list}>
        <Motion />
      </ul>
    </div>
  );
}
