// import Img from "../../assets/images/icon-online.svg";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.icon} alt={data.title} className={styles.cardImg} />
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <p className={styles.cardText}>{data.description}</p>
    </div>
  );
};

export default Card;
