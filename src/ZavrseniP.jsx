import styles from "./Styles/ZavrseniP.module.css";

const ZavrseniP = () => {
  return (
    <div className={styles.zavrseniParent} id="zavrseni-projekti">
      <div className={styles.zavrseniHeader}>
        <div className={styles.zavrseniTekst}>
          <h1>Završeni projekti</h1>
          <p>Ovdje mozete vidjeti projekte koji su još zavrseni</p>
        </div>
        <a href="#">Pogledaj sve projekte</a>
      </div>
      <div className={styles.projektiWrapper}>
        <div className={styles.projekat}>
          <div className={styles.projekatImg}></div>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh ut porta justo lorem
            suspendisse tincidunt. Risus egestas id auctor vitae bibendum duis.
            Vel tellus a sed sapien turpis odio id massa dui. Diam elit quam
            neque nec aliquet semper.
          </p>
        </div>
        <div className={styles.projekat}>
          <div className={styles.projekatImg}></div>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh ut porta justo lorem
            suspendisse tincidunt. Risus egestas id auctor vitae bibendum duis.
            Vel tellus a sed sapien turpis odio id massa dui. Diam elit quam
            neque nec aliquet semper.
          </p>
        </div>
        <div className={styles.projekat}>
          <div className={styles.projekatImg}></div>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh ut porta justo lorem
            suspendisse tincidunt. Risus egestas id auctor vitae bibendum duis.
            Vel tellus a sed sapien turpis odio id massa dui. Diam elit quam
            neque nec aliquet semper.
          </p>
        </div>
        <div className={styles.projekat}>
          <div className={styles.projekatImg}></div>
          <h2>Lorem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh ut porta justo lorem
            suspendisse tincidunt. Risus egestas id auctor vitae bibendum duis.
            Vel tellus a sed sapien turpis odio id massa dui. Diam elit quam
            neque nec aliquet semper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZavrseniP;
