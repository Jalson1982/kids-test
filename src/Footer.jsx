import styles from "./Styles/Footer.module.css";
import fbLogo from "./assets/fb.svg";
import igLogo from "./assets/ig.svg";
import waLogo from "./assets/wa.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h2>Vlašić Gradnja</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer pellentesque diam nec
          cras neque cursus. Porttitor turpis integer nunc massa nunc laoreet
          pretium vitae.
        </p>
        <div className={styles.socials}>
          <a href="#">
            <img src={fbLogo} />
          </a>
          <a href="#">
            <img src={igLogo} />
          </a>
          <a href="#">
            <img src={waLogo} />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <h3>Brzi linkovi</h3>
          <ul>
            <li>
              <a href="#pocetna">Početna</a>
            </li>
            <li>
              <a href="#o-nama">O nama</a>
            </li>
            <li>
              <a href="#aktivni-projekti">Aktivni projekti</a>
            </li>
            <li>
              <a href="#zavrseni-projekti">Završeni projekti</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
