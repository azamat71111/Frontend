import React from "react";
import styles from "./Apartments.module.sass";

export default function Apartments() {
  return (
    <div id="apartments" className={styles.container}>
      <div className={styles.block}>
        <div className={`${styles.card} ${styles.card__1}`}>
          <img
            src="images/kok-jar.png"
            alt=""
            className={`${styles.img} ${styles.img__1}`}
          />
          <h1 className={`${styles.title} ${styles.title__1}`}>Кок-Жар</h1>
          <p className={`${styles.price} ${styles.price__1}`}>
            550$ за квадрат
          </p>
        </div>
        <div className={`${styles.card} ${styles.card__2}`}>
          <img
            src="images/asanbai.png"
            alt=""
            className={`${styles.img} ${styles.img__2}`}
          />
          <h1 className={`${styles.title} ${styles.title__2}`}>Асанбай</h1>
          <p className={`${styles.price} ${styles.price__2}`}>
            800$ за квадрат
          </p>
        </div>
        <div className={`${styles.card} ${styles.card__3}`}>
          <img
            src="images/filka.png"
            alt=""
            className={`${styles.img} ${styles.img__3}`}
          />
          <h1 className={`${styles.title} ${styles.title__3}`}>Филармония</h1>
          <p className={`${styles.price} ${styles.price__3}`}>
            800$ за квадрат
          </p>
        </div>
        <div className={`${styles.card} ${styles.card__4}`}>
          <img
            src="images/vostok-5.png"
            alt=""
            className={`${styles.img} ${styles.img__4}`}
          />
          <h1 className={`${styles.title} ${styles.title__4}`}>Восток-5</h1>
          <p className={`${styles.price} ${styles.price__4}`}>
            550$ за квадрат
          </p>
        </div>
        <div className={`${styles.card} ${styles.card__5}`}>
          <img
            src="images/djal.png"
            alt=""
            className={`${styles.img} ${styles.img__5}`}
          />
          <h1 className={`${styles.title} ${styles.title__5}`}>Джал</h1>
          <p className={`${styles.price} ${styles.price__5}`}>
            600$ за квадрат
          </p>
        </div>
        <div className={`${styles.card} ${styles.card__6}`}>
          <img
            src="images/district.png"
            alt=""
            className={`${styles.img} ${styles.img__6}`}
          />
          <h1 className={`${styles.title} ${styles.title__6}`}>Микрорайоны</h1>
          <p className={`${styles.price} ${styles.price__6}`}>
            700$ за квадрат
          </p>
        </div>
      </div>
    </div>
  );
}
