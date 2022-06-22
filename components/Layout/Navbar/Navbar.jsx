import React, { useState } from "react";
import styles from "./Navbar.module.sass";
import { nav } from "../../../data/nav";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import cn from "classnames";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Евразия" />
        </div>
        <nav
          className={cn(styles.nav, {
            [styles.navVisible]: isOpen,
          })}
        >
          {nav.map(({ name, href, id }) => {
            return (
              <Link key={id} href={href}>
                <a className={styles.nav__link}>{name}</a>
              </Link>
            );
          })}
        </nav>
        <div className={styles.hamburger}>
          <Hamburger
            color="rgba(12,64,131,1)"
            size={30}
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(setOpen) => !setOpen}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
