import React from "react";
import styles from "./Upper.module.sass";
import Link from "next/link";

function Upper() {
  return (
    <div className={styles.upper}>
      <div className={styles.upper_container}>
        <div className={styles.grid}>
          <div className={styles.grid_block}>
            <img src="/images/upper-1.svg" />
            <h2>Продать</h2>
          </div>

          <div className={styles.grid_block}>
            <img src="/images/upper-2.svg" />
            <h2>Купить</h2>
          </div>

          <div className={styles.grid_block}>
            <img src="/images/upper-3.svg" />
            <h2>Оценка</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upper;
