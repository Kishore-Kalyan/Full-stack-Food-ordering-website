import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
          Sri Sai Ganesh Nagar
            <br /> Visakhapatnam, 530046
            <br />  083284 34794
          </p>
          <p className={styles.text}>
          M5R8+MV6, Kurmannapalem,.
            <br /> Visakhapatnam, 530032
            <br /> 01234 56789
          </p>
          <p className={styles.text}>
          SF-01, SUKRITI APARTMENTS
            <br /> Visakhaptnam, 530012
            <br /> 083415 48283
          </p>
          <p className={styles.text}>
          Exhibition Ground, CMR Mall
            <br /> Visakhapatnam, 530013
            <br /> 1800 202 2022
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
