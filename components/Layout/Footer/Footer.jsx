import React from "react";
import styles from "./Footer.module.sass";
import { nav } from "../../../data/nav";
import Link from "next/link";

export default function Footer() {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerNav}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="Евразия" />
          </div>
          <nav className={styles.nav}>
            {nav.map(({ name, href, id }) => {
              return (
                <Link key={id} href={href}>
                  <a className={styles.footer__link}>{name}</a>
                </Link>
              );
            })}
          </nav>
        </div>
        <div onClick={handlerScrollUp} className={styles.arrowUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
