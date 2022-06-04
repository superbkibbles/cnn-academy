import Link from "next/link";

import styles from "./applyArea.module.css";

const ApplyArea = () => {
  return (
    <section className={styles.applyArea}>
      <p className={"paragraph"}>
        زۆر کەمن ئەوانەی دەرفەتیان هەیە بۆ ئەوەی شایەد بن لەسەر مێژوو کەچی
        روودەدات لە پێش چاویان، لە ئێستادا رێگای ئەم دەرفەتە کراوەیە بۆتان
        لەلایەن رێبەرانی پیشەی رۆژنامەگەری، خێرا بکە بۆ تۆمار کردن.
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
