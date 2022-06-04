import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./cnn.module.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && (
        <div className={styles.mobileNavigation}>
          <ul className={styles.mobileNavigation__links}>
            <li onClick={() => setToggle(false)}>
              <Link href="#overview">
                <a>Overview</a>
              </Link>
            </li>
            <li onClick={() => setToggle(false)}>
              <Link href="#structure">
                <a>Structure</a>
              </Link>
            </li>
            <li onClick={() => setToggle(false)}>
              <Link href="#apply">
                <a>Apply</a>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <header className={styles.header}>
        <main className={styles.main}>
          <div className={styles.intro}>
            <div className={styles.app__navbarMenu}>
              <div
                onClick={() => setToggle(true)}
                className={styles.menu__lines}
              />
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navigation}>
                <li>
                  <Link href="#overview">
                    <a>Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="#structure">
                    <a>Structure</a>
                  </Link>
                </li>
                <li>
                  <Link href="#apply">
                    <a>Apply</a>
                  </Link>
                </li>
              </ul>
              <ul className={styles.language__container}>
                <li className={styles.active}>
                  <Link href="/cnn-academy">English</Link>
                </li>
                <li>
                  <Link href="/cnn-academy/kur">Kurdish</Link>
                </li>
                <li>
                  <Link href="/cnn-academy/ar">Arabic</Link>
                </li>
              </ul>
            </nav>

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

            <div className={styles.slogan}>
              <h2>
                Step into professional journalism by training with the domain’s
                leader
              </h2>
              <h3>
                CNN shares its trade secrets with aspiring journalists in Iraq
                through an 11-week course
              </h3>
            </div>
            {/* <div className={styles.header__apply}>
            <a
              target={"_blank"}
              rel="noreferrer"
              className={styles.apply_btn}
              href="https://docs.google.com/forms/d/12EBJFX56LzeT3SyQyDG-N1EFhFNkMRRAGJpMm258wN0/prefill"
            >
              Apply
            </a>
          </div>
           */}
            <div className={styles.header__apply}>
              <a className={styles.apply_btn} href="#overview">
                Learn More
              </a>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
