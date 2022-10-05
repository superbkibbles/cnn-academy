import Link from "next/link";

import styles from "./applyDate.module.css";

const ApplyDate = () => {
  return (
    <section className={styles.applyDate} id="apply">
      <div className={styles.container}>
        <div className={styles.applyDateContainer}>
          <h2
            className={styles.applyDate__heading}
            style={{ marginBottom: 60, fontSize: 24 }}
          >
            کەی دەتوانن داواکاری پێشکەش بکەن؟
          </h2>
          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            داواکاری کراوەیە:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 60 }}
            className={styles.applyDate__heading}
          >
            <span style={{ fontWeight: "normal" }}>تەمموزی</span> ٢٠٢٢ -
            <span style={{ fontWeight: "normal", marginRight: 5 }}>
              ٢٥ ئاب{" "}
            </span>
            ٢٠٢٢
          </h2>

          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            هەڵبژاردنی بەشداربووان:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 60 }}
            className={styles.applyDate__heading}
          >
            <span style={{ fontWeight: "normal" }}>آب</span> ٢٠٢٢ -
            <span style={{ fontWeight: "normal" }}> ئەیلول </span>
            ٢٠٢٢
          </h2>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          کەمن ئەو کەسانەی دەرفەتی ئەوەیان بۆ دەرەخسێت گۆڕانی مێژوو بە چاوی
          خۆیان ببینن. ئێستا تۆ ئەو دەرفەتەت ھەیە تاوەکو رێگەی رابەرانی کایەی
          راگەیاندن بگریت. زوو خۆت تۆمار بکە
        </p>
        <div className={styles.btnContainer}>
          <Link href="/cnn-academy/application">
            <a className={styles.apply_btn}>جێبەجێ بکە</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplyDate;
