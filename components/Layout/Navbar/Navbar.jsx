import React from "react";
import styles from "./Navbar.module.sass";
import Logo from "./logo.png";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Евразия" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
