import styles from "./overview.module.css";

const Overview = () => {
  return (
    <section className={"section"} id="overview">
      <div className={styles.overview}></div>
      <h2 className="heading-2">Course Overview</h2>
      <p className="paragraph">
        Through online workshops and webinar sessions with senior CNN
        journalists, participants learn how CNN gathers information, verifies
        sources and produces content for its multiple platforms.
      </p>
      <p className="paragraph">
        During the first weeks of the program, participants will complete ten
        core courses on topics such as Ethics in Journalism, the Art of
        Storytelling, Breaking News Coverage, etc. These courses will combine
        coursework on the CNN Academy Hub and live workshops with CNN Academy
        trainers and journalists.
      </p>
    </section>
  );
};

export default Overview;
