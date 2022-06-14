import styles from "../styles/Claim.module.css";

export default function Claim() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>You have been rickrolled!</h1>
        <img
          className={styles.img}
          src="images/rickroll.gif"
          alt="Rickroll gif"
        />
      </div>
    </div>
  );
}
