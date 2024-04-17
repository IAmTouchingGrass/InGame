import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/component/Menu/Menu";
import Comments from "@/component/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="alt" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>2021-01-01</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="alt" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              totam, amet in magnam, quis quam consequatur, id unde dolorum
              debitis doloribus inventore ipsum? Impedit, rerum recusandae quasi
              eveniet harum id?
            </p>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              totam, amet in magnam, quis quam consequatur, id unde dolorum
              debitis doloribus inventore ipsum? Impedit, rerum recusandae quasi
              eveniet harum id?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              totam, amet in magnam, quis quam consequatur, id unde dolorum
              debitis doloribus inventore ipsum? Impedit, rerum recusandae quasi
              eveniet harum id?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              totam, amet in magnam, quis quam consequatur, id unde dolorum
              debitis doloribus inventore ipsum? Impedit, rerum recusandae quasi
              eveniet harum id?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              totam, amet in magnam, quis quam consequatur, id unde dolorum
              debitis doloribus inventore ipsum? Impedit, rerum recusandae quasi
              eveniet harum id?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
