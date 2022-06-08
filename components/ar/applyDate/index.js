import styles from "./applyDate.module.css";

const ApplyDate = () => {
  return (
    <section className={styles.applyDate} id="apply">
      <div className={styles.container}>
        <div className={styles.applyDateContainer}>
          <h2
            className={styles.applyDate__heading}
            style={{ marginBottom: 60, fontSize: 32, marginTop: 0 }}
          >
            متى يمكن البدء بالتقديم؟
          </h2>
          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            فتح باب التقديم:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 60 }}
            className={styles.applyDate__heading}
          >
            1 <span style={{ fontWeight: "normal" }}>حزيران </span> 2022 – 15{" "}
            <span style={{ fontWeight: "normal" }}>تموز </span>
            2022
          </h2>

          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            الاختيار:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 30 }}
            className={styles.applyDate__heading}
          >
            15 <span style={{ fontWeight: "normal" }}>تموز</span> 2022 – 15{" "}
            <span style={{ fontWeight: "normal" }}>آب</span>
            2022
          </h2>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          القليلون هم من لديهم الفرصة ليقفوا شهوداً على التاريخ وهو يحدث أمام
          عينيهم. الطريق إلى هذه الفرصة متاح لكم الآن ومن قادة مهنة الصحافة.
          سارعوا بالتسجيل.
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
