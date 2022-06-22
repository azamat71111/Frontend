import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import { nav } from "../../../data/nav";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const navVariant = {
  hidden: {
    x: "100%",
  },
  animate: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      duration: 0.3,
    },
  },
  end: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.3,
    },
  },
};
function Navbar() {
  //humburger
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    if (!isOpen || screenWidth) {
      document.body.style.overflow = "visible";
    }
    if (isOpen && !screenWidth) {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);
  //humburger width
  const handleWidth = () => {
    const screenWidth = window.screen.width;
    if (screenWidth > 1000) {
      setOpen(true);
      setScreenWidth(true);
    } else {
      setOpen(false);
      setScreenWidth(false);
    }
  };
  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Евразия" />
        </div>
        {screenWidth ? (
          <nav className={styles.nav}>
            {nav.map(({ name, href, id }) => {
              return (
                <Link key={id} href={href}>
                  <a className={styles.nav__link}>{name}</a>
                </Link>
              );
            })}
          </nav>
        ) : (
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                className={cn(styles.nav, {
                  [styles.navVisible]: isOpen,
                })}
                initial="hidden"
                animate="animate"
                exit="end"
                variants={navVariant}
              >
                {nav.map(({ name, href, id }) => {
                  return (
                    <Link key={id} href={href}>
                      <a className={styles.nav__link}>{name}</a>
                    </Link>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        )}
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
