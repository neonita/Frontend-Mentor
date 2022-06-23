import Button from "../Button/Button";
import Mockup from "../../assets/images/image-mockups.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero__content}>
        <aside className={styles.Hero__information}>
          <h2 className={styles.Hero__heading}>
            Next generation digital banking
          </h2>
          <p className={styles.Hero__text}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className={styles.Hero__themeBtn}>
            <Button />
          </div>
        </aside>
      </div>
      <img
        src={Mockup}
        alt="Illustration of Easybank's app mockup."
        className={styles.Hero__img}
      />
    </section>
  );
};

export default Hero;
