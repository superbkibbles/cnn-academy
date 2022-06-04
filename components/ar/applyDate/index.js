import styles from "./applyDate.module.css";

const ApplyDate = () => {
  return (
    <section className={styles.applyDate}>
      <div className={styles.container}>
        <div className={styles.applyDateContainer}>
          <h2
            className={styles.applyDate__heading}
            style={{ marginBottom: 60, fontSize: 32 }}
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
            style={{ marginTop: 0, marginBottom: 60 }}
            className={styles.applyDate__heading}
          >
            15 <span style={{ fontWeight: "normal" }}>تموز</span> 2022 – 15{" "}
            <span style={{ fontWeight: "normal" }}>آب</span>
            2022
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ApplyDate;
