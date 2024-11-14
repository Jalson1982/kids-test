import styles from "./Styles/Home.module.css";
import image from "./assets/frame4.png";

const Home = () => {
  return (
    <div className={styles.home} id="pocetna">
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <p>Izgrađenih objektata 2024. godine</p>
          <h1>150+</h1>
          <p>
            Svjetski lider u građevinarstvu - sinonim za izvrsnost i inovaciju u
            izgradnji budućnosti.
          </p>
        </div>
        <div className={styles.second}>
          <p>Uvod</p>
          <h3>Stvaramo prostor gdje vaši snovi postaju stvarnost.</h3>
          <button className={styles.contactButton}>Kontaktiraj nas</button>
        </div>
      </div>
      <div className={styles.third}>
        <h1>Gradimo budućnost zajedno.</h1>
        <img src="https://s3-alpha-sig.figma.com/img/c9ce/89c4/2e4d8f6934f8eef4944c80937417ea66?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ggJ0EaVjRlRiigU1qg2o9VTdHidp7-bb8KUgJ4FIaIrjmiU9K9elnl~EhGF1u1YNfwVXcIaFYVyEwfwEQU65QnXDb~s6zPFzwx4sC0xNnL5NJdL3EEhjav6Arsk4fKfmJzKNlvxs3lLWlJgy0-4f~yrl-APV8U9AKHoZgd0k57E3jJKVPxXsEr8sxMfDbhbB7oSDTmrmZeINhxzXLdhvnjlMC-4hiM5GhgvQ8V6STQp9NiaWRPj-SZjGp2iZwwvubs-CkrBiwHvID66YlhTLpt09bIs1zl-0ROyn5k5GHETahNoXW9Tfai6Xt8XYqQ5C6WGs-fwOG8YuERYvZU2uoQ__" className={styles.image}/>
        <button className={styles.contactButton}>Kontaktiraj nas</button>
      </div>
    </div>
  );
};

export default Home;
