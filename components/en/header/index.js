import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./cnn.module.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Header = ({ title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.mobileNavigation}
          >
            <motion.div
              initial={{ rotateZ: 0 }}
              animate={{ rotateZ: 360 }}
              exit={{ rotateZ: 300 }}
              style={{
                position: "absolute",
                color: "#fff",
                right: 20,
                top: 20,
              }}
            >
              <AiOutlineClose onClick={() => setToggle(false)} size={30} />
            </motion.div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className={styles.mobileNavigation__links}
            >
              <motion.li variants={item} onClick={() => setToggle(false)}>
                <Link href="/cnn-academy#overview">Course Overview</Link>
              </motion.li>
              <motion.li variants={item} onClick={() => setToggle(false)}>
                <Link href="/cnn-academy#structure">Course Structure</Link>
              </motion.li>
              <motion.li variants={item} onClick={() => setToggle(false)}>
                <Link href="/cnn-academy#apply">Apply</Link>
              </motion.li>
              <motion.li variants={item} onClick={() => setToggle(false)}>
                <Link href="/cnn-academy/pressrelease">Press Release</Link>
              </motion.li>
            </motion.ul>

            <motion.ul
              className={styles.mobileNavigation__language}
              variants={container}
              initial="hidden"
              animate="show"
            >
              <li variants={item} className={styles.active}>
                <Link href="/cnn-academy/en">English</Link>
              </li>
              <li variants={item}>
                <Link href="/cnn-academy/kur">Kurdish</Link>
              </li>
              <li variants={item}>
                <Link href="/cnn-academy/ar">Arabic</Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={styles.header}>
        <main whileInView={{ backgroundSize: 1000 }} className={styles.main}>
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
                  <Link href="/cnn-academy#overview">
                    <a>Course Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cnn-academy#structure">
                    <a>Course Structure</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cnn-academy#apply">
                    <a>Apply</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cnn-academy/pressrelease">
                    <a>Press Release</a>
                  </Link>
                </li>
              </ul>
              <ul className={styles.language__container}>
                <li className={styles.active}>
                  <Link href="/cnn-academy/en">English</Link>
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
              <motion.div
                whileInView={{ x: [-7, 0] }}
                transition={{ duration: 3 }}
                className={styles.header__image_block}
              >
                <Image
                  src="/images/academy_logo_light_big.png"
                  className="header__cnn-image"
                  layout="fill"
                  objectFit="contain"
                  alt="CNN"
                />
              </motion.div>
              <div className={styles.header__line}></div>
              <motion.div
                whileInView={{ x: [7, 0] }}
                transition={{ duration: 3 }}
                className={styles.header__image_block}
              >
                <Image
                  src="/images/emc_logo.png"
                  className={styles.header__cnn_image}
                  layout="fill"
                  objectFit="contain"
                  alt="emc"
                />
              </motion.div>
            </div>

            {title ? (
              <div className={styles.slogan}>
                <motion.h2
                  whileInView={{ opacity: [0, 1], x: [10, 0] }}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: 24 }}
                >
                  {title}
                </motion.h2>
              </div>
            ) : (
              <div className={styles.slogan}>
                <motion.h2
                  whileInView={{ opacity: [0, 1], x: [10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  Step into professional journalism by training with the
                  domain’s leader
                </motion.h2>
                <motion.h3
                  whileInView={{ opacity: [0, 1], x: [-10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  CNN shares its trade secrets with aspiring journalists in Iraq
                  through a 12-week course
                </motion.h3>
              </div>
            )}

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
            <motion.div
              whileInView={{ opacity: [0.5, 1], y: [30, 0] }}
              transition={{ duration: 0.5 }}
              className={styles.header__apply}
            >
              <a className={styles.apply_btn} href="#overview">
                Learn More
              </a>
            </motion.div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
