import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import styles from "./Realters.module.sass";
import { motion } from "framer-motion";

let bottomVar = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: (num) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: num * 0.3,
    },
  }),
};
let VarInput = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: (num) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: num * 0.3,
    },
  }),
};
export default function Realters({ width }) {
  const [error, setError] = useState(null);

  const MotionForm = () => {
    const [user, setUser] = useState({
      name: "",
      phone: "",
    });
    const onChange = (e) => {
      setUser((value) => {
        return {
          ...value,
          [e.target.name]: e.target.value,
        };
      });
    };
    const submitHandler = async (e) => {
      e.preventDefault();
      if (user.name === "" || user.phone === "") {
        setError(true);
      } else {
        try {
          const res = await axios.post(`realters`, { data: user });
          if (!res.data) {
            throw new Error();
          }
          setUser(res.data.data);
        } catch (error) {
          setUser(false);
        }
        setUser({
          name: "",
          phone: "",
        });
        setError(false);
      }
    };
    if (width > 490) {
      return (
        <form onSubmit={submitHandler} className={styles.input}>
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={VarInput}
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
            variants={VarInput}
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
            variants={VarInput}
            custom={0}
            className={styles.btn}
          >
            Отправить
          </motion.button>
        </form>
      );
    } else {
      return (
        <form onSubmit={submitHandler} className={styles.input}>
          <motion.input
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={bottomVar}
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
            variants={bottomVar}
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
      );
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
          custom={1}
          className={styles.title}
        >
          НУЖНЫ РИЭЛТОРЫ?
        </motion.h4>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={bottomVar}
          custom={2}
          className={styles.title2}
        >
          Если вам нужно продать свою квартиру, заполните поле
        </motion.h2>
        <MotionForm />
      </div>
    </>
  );
}
