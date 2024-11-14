import styles from "./Styles/Partneri.module.css";
import logo1 from "./assets/Partneri/logo-1.png";
import logo2 from "./assets/Partneri/logo-2.png";
import logo3 from "./assets/Partneri/logo-3.png";
import logo4 from "./assets/Partneri/logo-4.png";
import logo5 from "./assets/Partneri/logo-5.png";
import logo6 from "./assets/Partneri/logo-6.png";
import logo7 from "./assets/Partneri/logo-7.png";
import logo8 from "./assets/Partneri/logo-8.png";

const Partneri = () => {
  return (
    <div className={styles.partneri}>
      <h1 className={styles.heading}>Ponosni partneri</h1>
      <div className={styles.listaPartnera}>
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
        <img src={logo6} alt="Logo 6" />
        <img src={logo7} alt="Logo 7" />
        <img src={logo8} alt="Logo 8" />
      </div>
    </div>
  );
};

export default Partneri;
