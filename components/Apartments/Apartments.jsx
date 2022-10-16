import React from "react";
import styles from "./Apartments.module.sass";
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

export default function Apartments({ width }) {
  const Motion = () => {
    if (width < 1125) {
      return (
        <div className={styles.block}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={leftVar}
            custom={0}
            className={`${styles.card} ${styles.card__1}`}
          >
            <img
              src="images/kok-jar.png"
              alt="Кок-жар"
              className={`${styles.img} ${styles.img__1}`}
            />
            <h1 className={`${styles.title} ${styles.title__1}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__1}`}>
              650$ за квадрат
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={rightVar}
            custom={0}
            className={`${styles.card} ${styles.card__2}`}
          >
            <img
              src="images/asanbai.png"
              alt="Асанбай"
              className={`${styles.img} ${styles.img__2}`}
            />
            <h1 className={`${styles.title} ${styles.title__2}`}>Асанбай</h1>
            <p className={`${styles.price} ${styles.price__2}`}>
              850$ за квадрат
            </p>
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
            className={`${styles.card} ${styles.card__3}`}
          >
            <img
              src="images/filka.png"
              alt="Филармония"
              className={`${styles.img} ${styles.img__3}`}
            />
            <h1 className={`${styles.title} ${styles.title__3}`}>Филармония</h1>
            <p className={`${styles.price} ${styles.price__3}`}>
              100$ за квадрат
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={rightVar}
            custom={0}
            className={`${styles.card} ${styles.card__4}`}
          >
            <img
              src="images/vostok-5.png"
              alt="Восток-5"
              className={`${styles.img} ${styles.img__4}`}
            />
            <h1 className={`${styles.title} ${styles.title__4}`}>Восток-5</h1>
            <p className={`${styles.price} ${styles.price__4}`}>
              700$ за квадрат
            </p>
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
            className={`${styles.card} ${styles.card__5}`}
          >
            <img
              src="images/djal.jpg"
              alt="Джал"
              className={`${styles.img} ${styles.img__5}`}
            />
            <h1 className={`${styles.title} ${styles.title__5}`}>Джал</h1>
            <p className={`${styles.price} ${styles.price__5}`}>
              850$ за квадрат
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={rightVar}
            custom={0}
            className={`${styles.card} ${styles.card__6}`}
          >
            <img
              src="images/district.png"
              alt="Микрорайоны"
              className={`${styles.img} ${styles.img__6}`}
            />
            <h1 className={`${styles.title} ${styles.title__6}`}>
              Микрорайоны
            </h1>
            <p className={`${styles.price} ${styles.price__6}`}>
              900$ за квадрат
            </p>
          </motion.div>
        </div>
      );
    } else {
      return (
        <div className={styles.block}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={leftVar}
            custom={0}
            className={`${styles.card} ${styles.card__1}`}
          >
            <img
              src="images/kok-jar.png"
              alt="Кок-жар"
              className={`${styles.img} ${styles.img__1}`}
            />
            <h1 className={`${styles.title} ${styles.title__1}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__1}`}>
              650$ за квадрат
            </p>
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
            className={`${styles.card} ${styles.card__2}`}
          >
            <img
              src="images/asanbai.png"
              alt="Асанбай"
              className={`${styles.img} ${styles.img__2}`}
            />
            <h1 className={`${styles.title} ${styles.title__2}`}>Асанбай</h1>
            <p className={`${styles.price} ${styles.price__2}`}>
              850$ за квадрат
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={rightVar}
            custom={0}
            className={`${styles.card} ${styles.card__3}`}
          >
            <img
              src="images/filka.png"
              alt="Филармония"
              className={`${styles.img} ${styles.img__3}`}
            />
            <h1 className={`${styles.title} ${styles.title__3}`}>Филармония</h1>
            <p className={`${styles.price} ${styles.price__3}`}>
              1000$ за квадрат
            </p>
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
            className={`${styles.card} ${styles.card__4}`}
          >
            <img
              src="images/vostok-5.png"
              alt="Восток-5"
              className={`${styles.img} ${styles.img__4}`}
            />
            <h1 className={`${styles.title} ${styles.title__4}`}>Восток-5</h1>
            <p className={`${styles.price} ${styles.price__4}`}>
              700$ за квадрат
            </p>
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
            className={`${styles.card} ${styles.card__5}`}
          >
            <img
              src="images/djal.jpg"
              alt="Джал"
              className={`${styles.img} ${styles.img__5}`}
            />
            <h1 className={`${styles.title} ${styles.title__5}`}>Джал</h1>
            <p className={`${styles.price} ${styles.price__5}`}>
              850$ за квадрат
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={rightVar}
            custom={0}
            className={`${styles.card} ${styles.card__6}`}
          >
            <img
              src="images/district.png"
              alt="Микрорайоны"
              className={`${styles.img} ${styles.img__6}`}
            />
            <h1 className={`${styles.title} ${styles.title__6}`}>
              Микрорайоны
            </h1>
            <p className={`${styles.price} ${styles.price__6}`}>
              900$ за квадрат
            </p>
          </motion.div>
        </div>
      );
    }
  };
  return (
    <div id="apartments" className={styles.container}>
      <Motion />
    </div>
  );
}
