import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const categoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Course</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt="alt"
            width={32}
            height={32}
            className={styles.Image}
          />
          JavaScript
        </Link>
      </div>
      <div className={styles.categories}>
        <Link
          href={`/blog`}
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            alt="alt"
            width={32}
            height={32}
            className={styles.Image}
          />
          HTML
        </Link>
      </div>
      <div className={styles.categories}>
        <Link
          href={`/blog`}
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            alt="alt"
            width={32}
            height={32}
            className={styles.Image}
          />
          CSS
        </Link>
      </div>
      <div className={styles.categories}>
        <Link
          href={`/blog`}
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            alt="alt"
            width={32}
            height={32}
            className={styles.Image}
          />
          REACT
        </Link>
      </div>
      <div className={styles.categories}>
        <Link
          href={`/blog`}
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            alt="alt"
            width={32}
            height={32}
            className={styles.Image}
          />
          NextJS
        </Link>
      </div>
      <div className={styles.categories}>
        <Link
          href={`/blog`}
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            alt="alt"
            width={32}
            height={32}
            className={styles.Image}
          />
          Angular
        </Link>
      </div>
    </div>
  );
};

export default categoryList;
