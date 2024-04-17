import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";
import ThemeToggle from "../themeToggle/themeToggle";


const Navbar = () => {
  return (
    <div className={styles.container}>
      
      <Link href="/" className={styles.logo}>
        LearnHub
      </Link>
      <div className={styles.links}>
        <Link href="/Course" className={styles.link}>
          Course
        </Link>
        <Link href="/mentors" className={styles.link}>
          Mentors
        </Link>
        <Link href="/offers" className={styles.link}>
          Offers
        </Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
