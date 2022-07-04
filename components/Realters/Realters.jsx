import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import styles from "./Realters.module.sass";

export default function Realters() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const onChange = (e) => {
    setUser((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = async (e) => {
    if (user.name === "" || user.phone === "") {
      e.preventDefault();
      setError(true);
    } else {
      e.preventDefault();
      try {
        const res = await axios.post(`realters`, { data: user });
        if (!res.data) {
          throw new Error();
        }
        setUser(res.data.data);
        setLoading("complete");
      } catch (error) {
        setUser(false);
        setLoading("error");
      }
      setUser({
        name: "",
        phone: "",
      });
      setError(true);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.title}>НУЖНЫ РЕАЛТЕРЫ</h4>
        <h2 className={styles.title2}>
          Если вам нужно продать свою квартиру, заполните поле
        </h2>
        <form onSubmit={submitHandler} className={styles.input}>
          <input
            onChange={onChange}
            value={user.name}
            name="name"
            type="text"
            placeholder={error ? "Заполните поля!" : "Ваше имя"}
            className={error ? styles.errorName : styles.input__name}
          />
          <input
            onChange={onChange}
            value={user.phone}
            name="phone"
            type="text"
            placeholder={error ? "Заполните поля!" : "Ваш номер"}
            className={error ? styles.errorName : styles.input__email}
          />
          <button className={styles.btn}>Отправить</button>
        </form>
        {loading === "complete" ? (
          <h3 className={styles.complete}>Успешно!</h3>
        ) : null}
        {loading === "error" ? (
          <h3 className={styles.error}>Сообщения уже отправлено!</h3>
        ) : null}
      </div>
    </>
  );
}
