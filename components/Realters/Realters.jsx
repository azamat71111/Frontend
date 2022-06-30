import axios from '../../api/axios';
import React, { useState } from 'react'
import styles from "./Realters.module.sass";

export default function Realters() {
  const [user, setUser] = useState({
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(null)
  const onChange = (e) => {
    setUser((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value
      }
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`realters`, {data: user});
      if (!res.data) {
        throw new Error();
      }
      setUser(res.data.data);
      setLoading('complete')
    } catch (error) {
      setUser(false);
      setLoading('error')
    }
  };
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.title}>НУЖНЫ РЕАЛТЕРЫ</h4>
        <h2 className={styles.title2}>Если вам нужно продать свою квартиру, заполните поле</h2>
        <form onSubmit={submitHandler} className={styles.input}>
          <input onChange={onChange} name='name' type="text" placeholder='Ваше имя' className={styles.input__name} />
          <input onChange={onChange} name='phone' type="text" placeholder='Ваш номер'  className={styles.input__email} />
          <button className={styles.btn}>Отправить</button>
        </form>
        {loading === 'complete' ? (<h3 className={styles.complete}>Успешно!</h3>) : null}
        {loading === 'error' ? (<h3 className={styles.error}>Сообщения уже отправлено!</h3>) : null}
      </div>
    </>
  )
}
