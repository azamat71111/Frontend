import React from "react";
import styles from "../../styles/About.module.sass";
import {motion} from 'framer-motion'

export default function About() {
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
      <div className={styles.title__info}>
        <motion.h1
          className={styles.title__about}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstVar}
          custom={0}
        >О НAC
        </motion.h1>
        <motion.h3
          className={styles.title__h3}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={secondVar}
          custom={0}
        >
          Мы занимаемся оценкой, продажой и покупкой квартир. Мы поможем вам
          продать вашу квартиру по очень выгодным вам ценам
        </motion.h3>
      </div>
      <div className={styles.block}>
        <div className={styles.block__img}>
          <motion.div
            className={styles.image}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={firstVar}
            custom={0}
          >
            <img
              className={styles.img}
              src="images/assessment.png"
              alt="Квартиры"
            />
          </motion.div>
          <motion.h1
            className={styles.block__h1}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={secondVar}
            custom={0}
          >
            Мы подберем вам уникальные дизайны, поможем вам оценить ваш дома
            либо квартиру,
          </motion.h1>
        </div>
        <div className={styles.block__img}>
          <motion.div
            className={styles.image}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={secondVar}
            custom={0}
          >
            <img
              className={styles.img}
              src="images/assessment.png"
              alt="Квартиры"
            />
          </motion.div>
          <motion.h1
            className={styles.block__h3}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={firstVar}
            custom={0}
          >
            По современным стандартам. Поможем подобрать квартиру по всем
            параметрам, и по доступным ценам.
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
