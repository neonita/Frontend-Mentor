import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/" alt="/" className={styles.img} />
      <small className={styles.author}>By Claire Robinson</small>
      <h4 className={styles.title}>
        Receive money in any currency with no fees
      </h4>
      <p className={styles.textPreview}>
        The world is getting smaller and we're becoming more mobile. So why
        should you be force to only receive money in a single...
      </p>
    </div>
  );
};

export default Card;
