import Image from "next/image";

import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <h2 className="heading-2">لە کۆتایی کۆرسەکەدا تۆ:</h2>
        <ul className={styles.skills__list_container}>
          <li>
            لە شێوازی کارکردنی ژووری هەواڵ تێدەگەی لە کاتی رووماڵکردنی هەواڵە
            بەپەلەکاندا.
          </li>
          <li>
            شارەزای رۆڵە جۆراوجۆرەکانی تیمی هەواڵ دەبیت (بەرھەمھێنەر، پەیامنێر،
            ڕۆژنامەوانی وێنەگر، ھەواڵساز، سەرنوسەری ھەواڵ)
          </li>
          <li>
            کەرەستەکانی پشکنینی ڕاستی هەواڵ و ڕێگاکانی پشتراستکردنەوەی
            کۆمەڵایەتی بەکاردەھێنیت.
          </li>
          <li>
            بەھێزکردنی تواناکانی چاوپێکەوتن، ڕاپۆرتی لێکۆڵینەوە و بریاردان.
          </li>
          <li>
            پەرەپێدانی توانا تەکنیکییەکان بۆ بەرهەمهێنانی ناوەرۆکی پلاتفۆرمە
            جیاوازەکان.
          </li>
          <li>
            فێردەبیت چۆن کاربکەیت لەژێر فشاری کاتی کەم و هەبوونی سەرچاوەی
            سنووردار.
          </li>
          <li>بڕوانامەی تەواوکردنی کۆرس وەردەگری</li>
        </ul>
      </div>
      <div className={styles.skills__imageContainer}>
        <Image
          src={"/images/Tunisia-1.png"}
          alt="Tunisia"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Skills;
