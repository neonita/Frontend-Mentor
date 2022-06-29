import styles from "./Card.module.css";
// import Img from "../../assets/images/image-currency.jpg";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={data.img} alt={data.title} className={styles.img} />
      </div>

      <div className={styles.content}>
        <small className={styles.author}>By {data.author}</small>
        <h4 className={styles.title}>
          <a href="/" className={styles.titleLink}>
            {data.title}
          </a>
        </h4>
        <p className={styles.textPreview}>{data.preview} ...</p>
      </div>
    </div>
  );
};

export default Card;
