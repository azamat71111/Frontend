import React from "react";
import styles from "./PriceRoom.module.sass";

export default function PriceRoom() {
  return (
    <div className={styles.background}>
      <header className={styles.container}>
        <div className={styles.info}>
          <div className={styles.email}>
            Емайл
            <div className={styles.email__item}>eurasia-kg.kg</div>
          </div>
          <div className={styles.number}>
            Номер
            <div className={styles.number__item}>+996 (700) 556 030</div>
          </div>
          <div className={styles.address}>
            Адрес
            <div className={styles.address__item}>Вверхний Джал 29</div>
            <div className={styles.address__item}>Бишкек</div>
            <div className={styles.address__item}>Кыргызстан</div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <h2 className={styles.sidebar__title}>Адрес</h2>
          <h2 className={styles.sidebar__subTitle}>
            Если хотите чтобы мы провели вам оценку квартиры, Напишите свои
            данные
          </h2>
          <div className={styles.sidebar__form}>
            <input
              className={styles.user__name}
              type="text"
              placeholder="Ваше имя"
              name=""
            />
            <input
              className={styles.user__address}
              placeholder="Ваш адрес"
              type="text"
              name=""
            />
            <input
              className={styles.user__number}
              placeholder="Ваш телефон"
              type="number"
              name=""
            />
            <input
              className={styles.user__email}
              placeholder="Ваш емайл"
              type="email"
              name=""
            />
            <textarea
              className={styles.user__des}
              placeholder="Ваше сообщения"
            />
            <button className={styles.form__btn}>Отправить</button>
          </div>
        </div>
      </header>
    </div>
  );
}
