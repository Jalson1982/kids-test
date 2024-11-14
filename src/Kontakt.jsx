import styles from "./Styles/Kontakt.module.css";
import phone from "./assets/Kontakt/phone.svg";
import mail from "./assets/Kontakt/mail.svg";
import location from "./assets/Kontakt/location.svg";
import { useState, useEffect, useRef } from "react";

const Kontakt = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init("H-Asuif2Guoe4wNTa");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const secondCard = containerRef.current.children[1];
      const secondCardPosition = secondCard.offsetLeft;
      const cardWidth = secondCard.offsetWidth;

      const scrollPosition =
        secondCardPosition - containerWidth / 2 + cardWidth / 2;

      containerRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  const openForm = () => {
    setIsFormOpened(true);
  };

  const sendEmail = () => {
    let from_name = document.getElementById("inputName").value;
    let from_mail = document.getElementById("inputMail").value;
    let from_number = document.getElementById("inputNumber").value;
    let from_message = document.getElementById("inputMessage").value;

    window.emailjs
      .send("service_nwqtkdk", "template_itf23p3", {
        from_name: from_name,
        from_mail: from_mail,
        from_number: from_number,
        from_message: from_message,
      })
      .then(() => {
        document.getElementById("inputName").value = "";
        document.getElementById("inputMail").value = "";
        document.getElementById("inputNumber").value = "";
        document.getElementById("inputMessage").value = "";
        setIsFormOpened(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
      });
  };

  const kontaktForma = () => (
    <div
      className={`${styles.kontaktForm} ${isFormOpened ? styles.visible : ""}`}
    >
      <h2>Kontakt forma</h2>
      <div className={styles.inputs}>
        <input
          type="email"
          placeholder="Unesite e-mail adresu"
          id="inputMail"
        />
        <input
          type="text"
          placeholder="Unesite vaše ime i prezime"
          id="inputName"
        />
        <input
          type="text"
          placeholder="Unesite vaš broj telefona"
          id="inputNumber"
        />
        <div className={styles.bottomPart}>
          <div className={styles.inputPoruka}>
            <label>Poruka:</label>
            <textarea
              placeholder="Unesite vašu poruku"
              id="inputMessage"
              rows="6"
            ></textarea>
          </div>
          <button onClick={sendEmail}>Pošaljite poruku</button>
        </div>
      </div>
    </div>
  );

  const formPlaceholder = () => (
    <div
      className={`${styles.kontaktLeft} ${!isFormOpened ? styles.visible : ""}`}
    >
      <h1>Pretvorite vaše snove u realnost</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Integer pellentesque diam nec
        cras neque cursus. Porttitor turpis integer nunc massa nunc laoreet
        pretium vitae. Vel eget adipiscing pretium bibendum sit malesuada vitae
        rhoncus sit. Amet sagittis in malesuada morbi nulla sed.
      </p>
      <button onClick={openForm}>
        <p>Kontaktirajte nas</p>
      </button>
    </div>
  );

  return (
    <div id="kontakt" className={styles.kontaktParent}>
      <h1>Kontakt</h1>
      <div className={styles.kontaktCards} ref={containerRef}>
        <div className={styles.kontaktCard}>
          <img src={phone} alt="phone" />
          <h3>Broj telefona</h3>
          <p>+387 00 000 000</p>
          <p>+387 00 000 000</p>
          <p>+387 00 000 000</p>
        </div>
        <div className={styles.kontaktCard}>
          <img src={mail} alt="mail" />
          <h3>E-mail</h3>
          <p>emailaddress@gmail.com</p>
        </div>
        <div className={styles.kontaktCard}>
          <img src={location} alt="location" />
          <h3>Lokacija</h3>
          <p>Adresa poslovnice</p>
        </div>
      </div>
      <div className={styles.kontaktBottom}>
        {isFormOpened ? kontaktForma() : formPlaceholder()}
        <img className={styles.kontaktRight} src="https://s3-alpha-sig.figma.com/img/bb2b/9f6a/aae816186be18d27e42ae519a0c56358?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZD6PKdX3OYl5nsPjzutPyX9KeSYjzzOEmNZJ1~mA4ymtFRYJGNy8jSEt3aokS4~ZcHfwTwJJh0kp716GyBql~KWN~TeSGld45hEQfWrrJnodXMDWm2ysSzuCGhiMBArX5IEQT8ra9tQWU6uXLzORDLcsf2s02j-KLHrIR81360mvuFzbiAK8vrGkN5IpuKME7kfIppvccnpsMTLgc3qyReK~mUnss-ZDm4LlTpMNIKaRx9A7l4noJRdqJbRhLiMXVjCq1VRKRug8pff8jPNOfmWCPRoPG0k55Mxmlnom5NPW9b2RHfX5ROuMsFOX3Wk7bGgWjg6DSDxyWVUYJmgiQ__"/>
      </div>
    </div>
  );
};

export default Kontakt;
