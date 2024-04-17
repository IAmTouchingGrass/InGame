import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

 const Card = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="alt" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={styles.date}>2021-01-01 - </span>
            <span className={styles.category}>Category</span>
          </div>
          <Link href="/">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          </Link>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            reiciendis at inventore cum atque temporibus, reprehenderit in modi
            eum deserunt, tenetur tempore magni ducimus nisi officia sint,
            expedita culpa dolor!
          </p>
          <Link href="/" className={styles.link}> Read More </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
