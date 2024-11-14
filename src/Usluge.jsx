import styles from "./Styles/Usluge.module.css";
import usluga1 from "./assets/Usluge/usluga-1.svg";
import usluga2 from "./assets/Usluge/usluga-2.svg";
import usluga3 from "./assets/Usluge/usluga-3.svg";
import usluga4 from "./assets/Usluge/usluga-4.svg";

const Usluge = () => {
  return (
    <div className={styles.usluge}>
      <h1>Usluge</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div className={styles.uslugeWrapper}>
        <div className={styles.usluga}>
          <img src={usluga1} />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.usluga}>
          <img src={usluga2} />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.usluga}>
          <img src={usluga3} />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.usluga}>
          <img src={usluga4} />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Usluge;
