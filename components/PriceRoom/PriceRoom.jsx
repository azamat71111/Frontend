import React, { useState } from "react";
import styles from "./PriceRoom.module.sass";
import axios from "../../api/axios";
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

export default function PriceRoom({ width }) {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    email: "",
    addrress: "",
    message: "",
  });
  const [loading, setLoading] = useState(null);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const onChange = (e) => {
    setMessage((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (message.phone === "" || message.name === "") {
      setErrorName(true);
      setErrorPhone(true);
    } else {
      try {
        const res = await axios.post(`adrresses`, { data: message });
        if (!res.data) {
          throw new Error();
        }
        setMessage(res.data.data);
        setLoading("complete");
        setErrorName(false);
        setErrorPhone(false);
      } catch (error) {
        setMessage(false);
        setLoading("error");
      }
      setMessage({
        name: "",
        phone: "",
        email: "",
        addrress: "",
        message: "",
      });
    }
  };
  return (
    <div id="contacts" className={styles.background}>
      <header className={styles.container}>
        <motion.div
          className={styles.info}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={firstVar}
          custom={0}
        >
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
        </motion.div>
        <div className={styles.sidebar}>
          <motion.h2
            className={styles.sidebar__title}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            custom={0}
          >
            Адрес
          </motion.h2>
          <motion.h2
            className={styles.sidebar__subTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={secondVar}
            custom={0}
          >
            Если хотите чтобы мы провели вам оценку квартиры, Напишите свои
            данные
          </motion.h2>
          <form onSubmit={submitHandler} className={styles.sidebar__form}>
            <motion.input
              onChange={onChange}
              className={
                errorPhone ? styles.user__error : `${styles.user__name}`
              }
              type="text"
              placeholder={errorName ? "Заполните поля!" : "Ваше имя"}
              name="name"
              value={message.name}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={bottomVar}
              custom={0}
            />
            <motion.input
              onChange={onChange}
              className={styles.user__address}
              placeholder="Ваш адрес"
              type="text"
              name="addrress"
              value={message.addrress}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={bottomVar}
              custom={0}
            />
            <motion.input
              onChange={onChange}
              className={
                errorPhone ? styles.user__error : `${styles.user__number}`
              }
              placeholder={errorName ? "Заполните поля!" : "Ваш номер"}
              type="text"
              name="phone"
              value={message.phone}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={bottomVar}
              custom={0}
            />
            <motion.input
              onChange={onChange}
              className={styles.user__email}
              placeholder="Ваш емайл"
              type="email"
              name="email"
              value={message.email}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={bottomVar}
              custom={0}
            />
            <motion.textarea
              onChange={onChange}
              className={styles.user__des}
              placeholder="Ваше сообщения"
              name="message"
              value={message.message}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={bottomVar}
              custom={0}
            />
            <motion.button className={styles.form__btn}>
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
      </header>
    </div>
  );
}
