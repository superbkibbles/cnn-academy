import Image from "next/image";
import Link from "next/dist/client/link";

import styles from "./cnn.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <ul className={styles.language__container}>
            <li>
              <Link href="/cnn-academy">English</Link>
            </li>
            <li>
              <Link href="/cnn-academy/kur">Kurdish</Link>
            </li>
            <li className={styles.active}>
              <Link href="/cnn-academy/ar">Arabic</Link>
            </li>
          </ul>
          <div className={styles.inner}>
            <div className={styles.header__image_block}>
              <Image
                src="/images/academy_logo_light_big.png"
                className="header__cnn-image"
                layout="fill"
                objectFit="contain"
                alt="CNN"
              />
            </div>
            <div className={styles.header__line}></div>
            <div className={styles.header__image_block}>
              <Image
                src="/images/emc_logo.png"
                className={styles.header__cnn_image}
                layout="fill"
                objectFit="contain"
                alt="emc"
              />
            </div>
          </div>
          <div className={styles.header__apply}>
            <a className={styles.apply_btn} href="#overview">
              المزيد
            </a>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
