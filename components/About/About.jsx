import React from "react";
import styles from "./About.module.sass";

export default function About() {
  return (
    <header className={styles.about}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.info}>
            <div className={styles.titles}>
              <h2 className={styles.about__h2}>О Нас</h2>
              <h2 className={styles.about__description}>
                Мы подберем вам уникальные дизайн
              </h2>
            </div>
            <a href="#" className={styles.about__link}>
              Узнать еще
            </a>
          </div>
          <div className={styles.img}>
            <img src="images/design.png" alt="" className={styles.img__about} />
          </div>
        </div>
      </div>
    </header>
  );
}
