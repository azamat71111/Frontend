import React from "react";
import styles from "./MainHead.module.sass";
export default function MainHead() {
  return (
    <header className={styles.head}>
      <main className={styles.container}>
        <div className={styles.main__content}>
          <div className={styles.main__img}>
            <img src="/images/mainPhoto.png" alt="Eurasia photo" />
            <div className={styles.main__cart}>
              <span className={styles.new__text}>NEW</span>
              <h4 className={styles.cart__title}>Новые квартиры</h4>
              <h4 className={styles.cartSub__title}>По новым стандартам</h4>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
