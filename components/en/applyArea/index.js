import Link from "next/link";

import styles from "./applyArea.module.css";

const ApplyArea = () => {
  return (
    <section className={styles.applyArea}>
      <p className={"paragraph"}>
        Few have the opportunity to witness history as it unfolds before their
        eyes. The path to this opportunity is available to you now and from the
        leaders of the journalism profession. Hurry up to apply.
      </p>

      <a
        target={"_blank"}
        rel="noreferrer"
        className={styles.applyBtn}
        href="https://docs.google.com/forms/d/12EBJFX56LzeT3SyQyDG-N1EFhFNkMRRAGJpMm258wN0/prefill"
      >
        Apply
      </a>
    </section>
  );
};

export default ApplyArea;
