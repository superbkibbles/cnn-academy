import styles from "./certificate.module.css";

const Certificate = () => {
  return (
    <div className={styles.certificate}>
      <div className={styles.left}>
        <h2 className={"heading-2"}>Course Certificate</h2>
        <p className="paragraph">
          Upon the course completion, participants will receive an official
          certificate, personalized for each participant and signed by CNN. It
          will be available both digitally and as a hard copy.
        </p>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Certificate;
