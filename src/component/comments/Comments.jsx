import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Write a comment..." />
          <button className={styles.button}>Post</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="alt"
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>12/12/2021</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            assumenda fugiat accusantium quod expedita accusamus, quos nesciunt
            voluptatum consequatur rerum iure laudantium, vitae earum quasi
            nobis fugit tempore officia inventore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
