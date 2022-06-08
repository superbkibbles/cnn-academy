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
            لە ١ی <span style={{ fontWeight: "normal" }}>حوزەیرانی</span> ٢٠٢٢ –
            ١٥ی<span style={{ fontWeight: "normal" }}>تەمموزی </span>
            ٢٠٢٢
          </h2>

          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            هەڵبژاردنی بەشداربووان:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 60 }}
            className={styles.applyDate__heading}
          >
            ١٥ی <span style={{ fontWeight: "normal" }}>تەمموزی</span> ٢٠٢٢- ١٥{" "}
            <span style={{ fontWeight: "normal" }}>ئابی</span>
            ٢٠٢٢
          </h2>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          کەم کەس ئەو دەرفەتەیان دەست دەکەوێت کە شایەدی مێژوو بن کە لەبەر چاویان
          دەردەکەوێت. ڕێگا بۆ ئەم دەرفەتە بۆ تۆ بەردەستە ئێستا و لەلایەن
          ڕابەرەکانی کاری ڕۆژنامەوانی. خێراکە خۆت تۆمارکە.
        </p>
        <div className={styles.btnContainer}>
          <a className={styles.apply_btn} href="#overview">
            تقديم
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplyDate;
