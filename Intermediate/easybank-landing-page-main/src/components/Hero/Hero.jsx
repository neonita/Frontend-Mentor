import React from "react";
import Button from "../Button/Button";
import Mockup from "../../assets/images/image-mockups.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* sm: top | lg: right */}
        <div className={styles.img__container}>
          <img
            src={Mockup}
            alt="Illustration of Easybank mockup."
            className={styles.img}
          />
        </div>

        {/* sm: bottom | lg: left  */}
        <article className={styles.description}>
          <header className={styles.header}>
            <h2 className={styles.title}>Next generation digital banking</h2>
          </header>
          <p className={styles.text}>
            Take your financial life online. Your Easybank account will be a
            one-stop shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <Button />
        </article>
      </div>
    </section>
  );
};

export default Hero;
