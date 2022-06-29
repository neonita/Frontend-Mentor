import Data from "./articlesData";
import styles from "./Articles.module.css";
import Card from "./Card";

const Articles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Latest Articles</h2>
        <article className={styles.articles}>
          <ul className={styles.ul}>
            {Data.map((d, index) => {
              return (
                <li className={styles.cardItem} key={index}>
                  <Card data={d} />
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Articles;
