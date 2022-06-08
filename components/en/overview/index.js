import styles from "./overview.module.css";

const Overview = () => {
  return (
    <section className={styles.overview} id="overview">
      <h2 className="heading-2" style={{ textAlign: "center" }}>
        Course Overview
      </h2>

      <div className={styles.overviewContainer}>
        <div className={styles.textContainer}>
          <h3 className="heading-3">
            Learn how to gather, verify and report information like CNN.
          </h3>
          <p className="paragraph">
            CNN Academy and Erbil Media City are partnering to bring a 12-week
            journalism course aimed at inspiring the next generation of
            journalists in Iraq.
          </p>
          <p className="paragraph">
            Through online workshops and webinar sessions with senior CNN
            journalists, participants learn how CNN gathers information,
            verifies sources and produces content for its multiple platforms.
          </p>
          <p className="paragraph">
            Participants will complete ten core courses on topics such as Ethics
            in Journalism, the Art of Storytelling and Breaking News Coverage.
            These courses will combine coursework on the CNN Academy Hub and
            live workshops with CNN Academy trainers and journalists.
          </p>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/464701621"
            // width="600"
            height="400"
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
            frameBorder={"0"}
            onTimeUpdate={() => console.log("something")}
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <p className="paragraph">
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
      </p> */}
    </section>
  );
};

export default Overview;
