import React from "react";
import styles from "./Services.module.sass";
import {motion} from 'framer-motion'

export default function Services() {
  let firstVar = {
    hidden: {
      x: -20,
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
  let secondVar = {
    hidden: {
      x: 40,
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
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.card__1}`}>
        <motion.div 
          className={`${styles.info__service} ${styles.info__service1}`}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={secondVar}
          custom={0}
        >
          <h4 className={`${styles.h4__service} ${styles.h4__service1}`}>
            Начало
          </h4>
          <p className={styles.p__info}>
            Мы подберем вам дизайн Рассчитаем расходы Сделаем ремонт помещения
            Дадим ключи в ваши руки
          </p>
        </motion.div>
        <motion.img
          src="images/assessment.png" 
          alt="" 
          className={styles.img__service} 
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstVar}
          custom={0}
        />
      </div>
      <div className={`${styles.card} ${styles.card__2}`}>
        <motion.img
          src="images/assessment.png"
          alt="Assestent"
          className={`${styles.img__service} ${styles.img__service2}`}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstVar}
          custom={0}
        />
        <motion.div
          className={`${styles.info__service} ${styles.info__service2}`}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={secondVar}
          custom={0}
        >
          <h4 className={`${styles.h4__service} ${styles.h4__service2}`}>
            Оценка
          </h4>
          <p className={`${styles.p__info} ${styles.p__info2}`}>
            Мы помогаем вам оценить ваш дома либо квартиру по современным
            стандартам. Поможем подобрать квартиру по всем параметрам и по
            доступным ценам.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
