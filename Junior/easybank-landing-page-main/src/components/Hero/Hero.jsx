import Button from "../Button/Button";
import Mockup from "../../assets/images/image-mockups.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <aside
          className={styles.information}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className={styles.heading}>Next generation digital banking</h2>
          <p className={styles.text}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className={styles.themeBtn}>
            <Button />
          </div>
        </aside>
      </div>
      <img
        src={Mockup}
        alt="Illustration of Easybank's app mockup."
        className={styles.img}
        data-aos="fade-up"
        data-aos-duration="2000"
      />
    </section>
  );
};

export default Hero;
