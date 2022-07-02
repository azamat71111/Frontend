import React from "react";
import styles from "./MainHead.module.sass";
import { motion } from "framer-motion";

export default function MainHead({ width }) {
  const variantImg = {};
  // if (width) {
  //   variantImg = {
  //     hidden: {
  //       x: "20px",
  //     },
  //     animate: {
  //       x: "0",
  //       transition: {
  //         type: "spring",
  //         stiffness: 400,
  //         damping: 20,
  //         duration: 0.3,
  //       },
  //     },
  //   };
  // } else {
  //   return;
  // }
  return (
    <header className={styles.head}>
      <main className={styles.container}>
        <div className={styles.main__content}>
          <motion.div
            initial="hidden"
            animate="animate"
            variants={variantImg}
            className={styles.main__img}
          >
            <img src="/images/mainPhoto.png" alt="Eurasia photo" />
            <div className={styles.main__cart}>
              <span className={styles.new__text}>NEW</span>
              <h4 className={styles.cart__title}>Новые квартиры</h4>
              <h4 className={styles.cartSub__title}>По новым стандартам</h4>
            </div>
          </motion.div>
        </div>
      </main>
    </header>
  );
}
