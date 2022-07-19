import Link from "next/link";

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
            <span style={{ fontWeight: "normal" }}>حزيران </span> 2022 -
            <span style={{ fontWeight: "normal" }}> تموز </span>
            2022
          </h2>

          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            الاختيار:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 30 }}
            className={styles.applyDate__heading}
          >
            <span style={{ fontWeight: "normal" }}>تموز</span> 2022 -
            <span style={{ fontWeight: "normal" }}> آب</span>
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
          {/* <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdi9tDudOSLk51zDQu29qRIrG8J9oaMRYwJvWZ5GCO9CEZC_A/viewform?usp=pp_url&entry.1438322629=jh@mail.com&entry.1888033306=Iraq&entry.1969478913=iraq"> */}
          <Link href="/cnn-academy/application">
            <a
              // target="_blank"
              // rel="noopener noreferrer"
              className={styles.apply_btn}
            >
              تقديم
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplyDate;
