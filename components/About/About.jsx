import React from 'react'
import styles from "./About.module.sass"

export default function About() {
    return (
        <header className={styles.about}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2 className={styles.about__h2}>О Нас</h2>
                    <h2 className={styles.about__description}>Мы подберем вам уникальные дизайны</h2>
                    <a href="#" className={styles.about__link}>Узнать еще</a>
                </div>
                <div className={styles.img}>
                    <img src="images/design.png" alt="" className={styles.img__about} />
                </div>
            </div>
        </header>
    )
}      
