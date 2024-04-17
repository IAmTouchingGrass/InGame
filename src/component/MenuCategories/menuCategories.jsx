import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        JavaScript
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        HTML
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        CSS
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        REACT
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        NextJS
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Angular
      </Link>
    </div>
  );
};

export default MenuCategories;