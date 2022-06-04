import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__image_block}>
        <Image
          src={"/images/emc_logo.png"}
          className={styles.footer__cnn_image}
          layout="fill"
          objectFit="contain"
          alt="emc"
        />
      </div>

      <div className={styles.info__container}>
        <h3 className={styles.info}>
          Email:{" "}
          <a href="mailto:cnn.academy@erbilmc.com">cnn.academy@erbilmc.com</a>
        </h3>
        <h3 className={styles.info}>
          Phone Number: <a href="tel:+9647507707121">+964 750 770 7121</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
