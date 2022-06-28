import Data from "./mainData";
// import Img from "../../assets/images/icon-online.svg";
import styles from "./Main.module.css";
import Card from "./Card";

const Main = () => {
  console.log(
    Data.forEach((d) => {
      console.log(d.icon);
    })
  );
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why choose Easybank?</h2>
          <p className={styles.description}>
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
          <p className={styles.description}>
            Control your finances like never before.
          </p>
        </div>

        <section className={styles.information}>
          <ul className={styles.ul}>
            {Data.map((d, index) => {
              return (
                <li className={styles.cardItem} key={index}>
                  <Card data={d} />
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Main;
