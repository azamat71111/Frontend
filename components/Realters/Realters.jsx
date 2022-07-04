import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import styles from "./Realters.module.sass";
import { motion } from "framer-motion";

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
        <motion.h4
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={bottomVar}
          custom={0}
          className={styles.title}
        >
          НУЖНЫ РЕАЛТЕРЫ
        </motion.h4>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={topVar}
          custom={0}
          className={styles.title2}
        >
          Если вам нужно продать свою квартиру, заполните поле
        </motion.h2>
        <form onSubmit={submitHandler} className={styles.input}>
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={secondVar}
            custom={0}
            onChange={onChange}
            value={user.name}
            name="name"
            type="text"
            placeholder={error ? "Заполните поля!" : "Ваше имя"}
            className={error ? styles.errorName : styles.input__name}
          />
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={firstVar}
            custom={0}
            onChange={onChange}
            value={user.phone}
            name="phone"
            type="text"
            placeholder={error ? "Заполните поля!" : "Ваш номер"}
            className={error ? styles.errorName : styles.input__email}
          />
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={bottomVar}
            custom={0}
            className={styles.btn}
          >
            Отправить
          </motion.button>
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
