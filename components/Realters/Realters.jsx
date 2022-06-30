import React from 'react'
import styles from "./Realters.module.sass";

export default function Realters() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Нужны реалтеры</h4>
      <h2 className={styles.title2}>Если вам нужно продать свою квартиру, заполните поле</h2>
      <div className={styles.input}>
        <input type="text" placeholder='Ваше имя' className={styles.input__name} />
        <input type="email" placeholder='Ваш email'  className={styles.input__email} />
        <button className={styles.btn}>Отправить</button>
      </div>
    </div>
  )
}
