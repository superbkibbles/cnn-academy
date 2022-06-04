import Link from "next/link";

import styles from "./applyArea.module.css";

const ApplyArea = () => {
  return (
    <section className={styles.applyArea}>
      <p className={"paragraph"}>
        القليلون هم من لديهم الفرصة ليقفوا شهوداً على التاريخ وهو يحدث أمام
        عينيهم. الطريق إلى هذه الفرصة متاح لكم الآن وعبر قادة مهنة الصحافة.
        سارعوا بالتسجيل.
      </p>

      <a
        target={"_blank"}
        rel="noreferrer"
        className={styles.applyBtn}
        href="https://docs.google.com/forms/d/12EBJFX56LzeT3SyQyDG-N1EFhFNkMRRAGJpMm258wN0/prefill"
      >
        تقديم
      </a>
    </section>
  );
};

export default ApplyArea;
