import logo from "./assets/logo.svg";
import styles from "./Styles/Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <>
    <div className={styles.whiteBar}></div>
      <div className={`${styles.header} ${isOpened ? styles.fullscreen : ""}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={`${styles.center} ${isOpened ? styles.opened : ""}`}>
          <ul className={`${styles.links} ${isOpened ? styles.opened : ""}`}>
            <li>
              <a href="#pocetna" onClick={closeMenu}>
                Početna
              </a>
            </li>
            <li>
              <a href="#o-nama" onClick={closeMenu}>
                O nama
              </a>
            </li>
            <li>
              <a href="#aktivni-projekti" onClick={closeMenu}>
                Aktivni projekti
              </a>
            </li>
            <li>
              <a href="#zavrseni-projekti" onClick={closeMenu}>
                Završeni projekti
              </a>
            </li>
          </ul>
        </div>
        <div className={`${styles.contact} ${isOpened ? styles.opened : ""}`}>
          <a
            href="#kontakt"
            id="contactButton"
            className={`${styles.contactButton} ${
              isOpened ? styles.opened : ""
            }`}
            onClick={closeMenu}
          >
            Kontaktiraj nas
          </a>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default Header;
