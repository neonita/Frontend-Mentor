import styles from "./Button.module.css";

const Button = () => {
  return (
    <button type="button" className={styles.btn}>
      Request Invite
    </button>
  );
};

export default Button;
