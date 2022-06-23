import React from 'react'
import styles from "./Services.module.sass"

export default function Services() {
return (
    <div className={styles.container}>
        <div className={`${styles.card} ${styles.card__1}`}>
            <div className={styles.info__service}>
                <h4 className={`${styles.h4__service} ${styles.h4__service1}`}>Начало</h4>
                <p className={styles.p__info}>Мы подберем вам дизайн  Рассчитаем расходы  Сделаем ремонт помещения Дадим ключи в ваши руки</p>
            </div>
            <img src="images/start.png" alt="" className={styles.img__service} />
        </div>
        <div className={`${styles.card} ${styles.card__2}`}>
        <img src="images/assessment.png" alt="" className={`${styles.img__service} ${styles.img__service2}`} />
            <div className={`${styles.info__service} ${styles.info__service2}`}>
                <h4 className={`${styles.h4__service} ${styles.h4__service2}`}>Оценка</h4>
                <p className={`${styles.p__info} ${styles.p__info2}`}>Мы помогаем вам оценить ваш дома либо квартиру по современным стандартам.
                    Поможем подобрать квартиру по всем параметрам и по доступным ценам.</p>
            </div>
        </div>
    </div>
)
}
