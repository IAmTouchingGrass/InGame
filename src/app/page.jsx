
import styles from "./homepage.module.css";
import Featured from "../component/featured/featured";
import CategoryList from "@/component/categoryList/categoryList";
import CardList from "@/component/cardList/cardList";
import Menu from "@/component/menu/menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList/>
        <Menu />
      </div>
    </div>
  );
}