import styles from "./styles.module.css";
import instagram from "../../assets/images/ic-instagram.svg";
import whatsapp from "../../assets/images/ic-whatsapp.svg";
/* import map from "../../assets/images/map.png"; */

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
          {/* <img src={map} alt="#" className={styles.footer__map}></img> */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092216354006!2d13.375044699999998!3d52.5079329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1705492076560!5m2!1sru!2sde"
            width="1360"
            height="350"
            style={{ border: "none" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
