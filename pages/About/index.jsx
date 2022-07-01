import React from 'react'
import styles from "../../styles/About.module.sass";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.title__info}>
          <h1 className={styles.title__about}>О НAC</h1>
          <h3 className={styles.title__h3}>Мы занимаемся оценкой,продажой и покупкой квартир.</h3>
          <h3 className={`${styles.title__h3} ${styles.title__2} `}>Мы поможем вам продать вашу квартиру по очень выгодным вам ценам</h3>
      </div>
      <div className={styles.block}>
        <div className={styles.block__img}>
          <div className={styles.image}><img className={styles.img} src="images/assessment.png" alt="Квартиры" /></div>
          <h1 className={styles.block__h1}>Мы подберем вам уникальные дизайны, поможем вам оценить ваш дома либо квартиру,</h1>
        </div>
        <div className={styles.block__img}>
          <div className={styles.image}><img className={styles.img} src="images/assessment.png" alt="Квартиры" /></div>
          <h1 className={styles.block__h3}>По современным стандартам. Поможем подобрать квартиру по всем параметрам, и по доступным ценам.</h1>
        </div>
      </div>
    </div>
  )
}
