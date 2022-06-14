import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  function buttonClick() {
    router.push("/claim");
  }

  return (
    <div className={styles.container}>
      <img className={styles.img} src="images/nitro.png" alt="Nitro logo" />
      <h1 className={styles.h1}>Nitro Generator V2</h1>
      <button className={styles.button} onClick={buttonClick}>
        Generate Nitro
      </button>
      <img hidden src="images/rickroll.gif" alt="Hidden rickroll" />
    </div>
  );
}
