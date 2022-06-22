import React from "react";
import styles from "./Footer.module.sass";
import { nav } from "../../../data/nav";
import Link from "next/Link";

export default function Footer() {
  return (
    <div className={styles.footer}>
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
        <div className={styles.arrowUp}>
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
