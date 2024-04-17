import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Wanna explore more E- Learnings come and join us for more exciting
            Courses
          </h1>
          <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/onboardingPic.png"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
