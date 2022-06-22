import React from "react";
import styles from "./Navbar.module.sass";
import { nav } from "../../../data/nav";
import Link from "next/Link";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Евразия" />
        </div>
        <nav className={styles.nav}>
          {nav.map(({ name, href, id }) => {
            return (
              <Link key={id} href={href}>
                <a className={styles.nav__link}>{name}</a>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
