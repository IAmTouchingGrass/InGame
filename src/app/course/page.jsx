import CardList from "@/component/cardList/cardList";
import styles from "./blogPage.module.css";
import Menu from "@/component/Menu/Menu";

const CoursePage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Featured Course</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default CoursePage;