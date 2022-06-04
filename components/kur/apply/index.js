import Image from "next/image";

import styles from "./apply.module.css";

const Apply = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <h2 className="heading-2">کێ دەتوانێت داواکاری پێشکەش بکات؟</h2>
        <p className="paragraph">
          کۆرسی ئەکادیمیای سی ئێن ئێن لە هەولێر ئەو کەسانە بە ئامانج دەگرێت کە
          لەسەرەتای گەشتەکەیاندان لە کاری ڕۆژنامەوانی. بەشداربووان دەکرێت لە
          کۆتا ساڵی خوێندنی زانکۆدابن یان لە سەرەتای ساڵەکانی دامەزراندنیانبن لە
          دەزگایەکی میدیایی
        </p>

        <ul className={styles.skills__list_container}>
          <li>پێویستە بەشداربووان دانیشتووی عێراقبن. </li>
          <li>پێویستە بەشداربووان ٢١ ساڵ یان گەورەتربن.</li>
          <li>
            پێویستە بەشداربووان بە عەرەبی، کوردی یان ئینگلیزی قسەبکەن. زۆربەی
            وانەکان بە ئینگلیزی دەگوترێنەوە (وەرگێران بەردەستدەبێت) بۆیە توانای
            باشی زمان پەسەندترە
          </li>
          <li>
            پێویستە بەشداربووان بتوانن لە ھەولێر ئامادەبن بۆ ھەندێک وانە کە
            رووبەروو ئەنجامدەدرێن. بەشداربووان دەبێت ‌هێڵی ئینتەرنێتییان لەلا
            بەردەستبێت بۆ ئەوەی بتوانن سەرچاوە دیجیتاڵییەکان بەکاربھێنن
          </li>
        </ul>
      </div>
      <div className={styles.skills__imageContainer}>
        <Image
          src={"/images/Tunisia-2.jpg"}
          alt="Tunisia"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Apply;
