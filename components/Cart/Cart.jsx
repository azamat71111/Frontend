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
export default function Cart() {
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
        <li className={styles.cart__item}>
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
              <h4 className={styles.cartContent__title}>О нас</h4>
              {/* <Link href="/">
                <a className={styles.cartContent__btn}>Узнать ещё</a>
              </Link> */}
            </motion.div>
          </AnimatePresence>
        </li>
        <li className={styles.cart__item}>
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
              {/* <Link href="/">
                <a className={styles.cartContent__btn}>Узнать ещё</a>
              </Link> */}
            </motion.div>
          </AnimatePresence>
        </li>
        <li className={styles.cart__item}>
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
              <h4 className={styles.cartContent__title}>Наши контакты</h4>
              {/* <Link href="/">
                <a className={styles.cartContent__btn}>Узнать ещё</a>
              </Link> */}
            </motion.div>
          </AnimatePresence>
        </li>
      </ul>
    </div>
  );
}
