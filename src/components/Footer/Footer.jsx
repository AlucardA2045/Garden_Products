import styles from "./styles.module.css";
import instagram from "../../assets/images/ic-instagram.svg";
import whatsapp from "../../assets/images/ic-whatsapp.svg";
import map from "../../assets/images/map.png";

const Footer = () => {
  const Contact = [
    {
      name: "Phone",
      info: "+49 999 999 99 99",
    },
    {
      name: "Socials",
      info: <img alt="#" src={instagram} />,
      info2: <img alt="#" src={whatsapp} />,
    },
    {
      name: "Address",
      info: "Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland",
    },
    {
      name: "Working Hours",
      info: "24 hours a day",
    },
  ];
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.footer__title}>Contact</h2>
        <div className={styles.footer__content}>
          <ul className={styles.footer__info}>
            {Contact.map((el, ind) => (
              <li key={ind} className={styles.footer__info_block}>
                {el.name}
                <div className={styles.footer__info_block_text}>
                  {el.info}
                  {el.info2}
                </div>
              </li>
            ))}
          </ul>
          <img src={map} alt="#" className={styles.footer__map}></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
