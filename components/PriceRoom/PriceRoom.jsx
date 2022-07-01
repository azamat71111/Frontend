import React, { useState } from "react";
import styles from "./PriceRoom.module.sass";
import axios from '../../api/axios'

export default function PriceRoom() {
  const [message, setMessage] = useState(false)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(false)
  const onChange = (e) => {
    setMessage((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault() 
    if(message) {
      try {
        const res = await axios.post(`adrresses`, {data: message})
        if (!res.data) {
          throw new Error();
        }
        setMessage(res.data.data);
        setLoading('complete')
      } catch (error) {
        setMessage(false);
        setLoading('error')
      }
    } else {
      setError(true)
    }
  };

  return (
    <div id="contacts" className={styles.background}>
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
          <form onSubmit={submitHandler} className={styles.sidebar__form}>
            <div className={styles.position}>
              <input
                onChange={onChange}
                className={styles.user__name}
                type="text"
                placeholder="Ваше имя"
                name="name"
              />
              {error ? <h3 className={styles.erorr}>Заполните поля!</h3> : null}
            </div>
            <input
              onChange={onChange}
              className={styles.user__address}
              placeholder="Ваш адрес"
              type="text"
              name="addrress"
            />
            <div className={styles.position}>
              <input
                onChange={onChange}
                className={styles.user__number}
                placeholder="Ваш телефон"
                type="text"
                name="phone"
              />
              {error ? <h3 className={styles.erorr}>Заполните поля!</h3> : null}
            </div>
            <input
              onChange={onChange}
              className={styles.user__email}
              placeholder="Ваш емайл"
              type="email"
              name="email"
            />
            <textarea
              onChange={onChange}
              className={styles.user__des}
              placeholder="Ваше сообщения"
              name="message"
            />
            <button className={styles.form__btn}>Отправить</button>
          </form>
          {loading === 'complete' ? <h3 className={styles.complete}>Успешно!</h3> : null}
          {loading === 'error' ? <h3 className={styles.error}>Сообщения уже отправлено!</h3> : null}
        </div>
      </header>
    </div>
  );
}
