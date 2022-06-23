import React from 'react'
import styles from "./Apartments.module.sass";


export default function Apartments() {
return (
    <div className={styles.containers}>
        <div className={`${styles.card} ${styles.card__1}`}>
            <img src="images/kok-jar.png" alt="" className={`${styles.img} ${styles.img__1}`}/>
            <h1 className={`${styles.title} ${styles.title__1}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__1}`}>459$ за квадрат</p>
        </div>
        <div className={`${styles.card} ${styles.card__2}`}>
            <img src="images/kok-jar.png" alt="" className={`${styles.img} ${styles.img__2}`}/>
            <h1 className={`${styles.title} ${styles.title__2}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__2}`}>459$ за квадрат</p>
        </div>
        <div className={`${styles.card} ${styles.card__3}`}>
            <img src="images/kok-jar.png" alt="" className={`${styles.img} ${styles.img__3}`}/>
            <h1 className={`${styles.title} ${styles.title__3}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__3}`}>459$ за квадрат</p>
        </div>
        <div className={`${styles.card} ${styles.card__4}`}>
            <img src="images/kok-jar.png" alt="" className={`${styles.img} ${styles.img__4}`}/>
            <h1 className={`${styles.title} ${styles.title__4}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__4}`}>459$ за квадрат</p>
        </div>
        <div className={`${styles.card} ${styles.card__5}`}>
            <img src="images/kok-jar.png" alt="" className={`${styles.img} ${styles.img__5}`}/>
            <h1 className={`${styles.title} ${styles.title__5}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__5}`}>459$ за квадрат</p>
        </div>
        <div className={`${styles.card} ${styles.card__6}`}>
            <img src="images/kok-jar.png" alt="" className={`${styles.img} ${styles.img__6}`}/>
            <h1 className={`${styles.title} ${styles.title__6}`}>Кок-Жар</h1>
            <p className={`${styles.price} ${styles.price__6}`}>459$ за квадрат</p>
        </div>
    </div>
)
}
