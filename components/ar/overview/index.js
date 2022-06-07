import styles from "./overview.module.css";

const Overview = () => {
  return (
    <section className={styles.overview} id="overview">
      <h2 className="heading-2" style={{ textAlign: "center" }}>
        نظرة عامة على الدورة التدريبية
      </h2>

      <div className={styles.overviewContainer}>
        <div className={styles.textContainer}>
          <h3 className="heading-3">
            تعلّم كيف تجمع، تدقق وتقدّم المعلومات كـ CNN
          </h3>
          <p className="paragraph">
            تتعاون أكاديمية CNN ومدينة أربيل الإعلامية لتقديم دورة صحفية مدتها
            12 أسبوعاً تهدف إلى إلهام الجيل القادم من الصحفيين في العراق.
          </p>
          <p className="paragraph">
            من خلال ورش العمل وجلسات الندوات عبر الإنترنت مع كبار صحفيي CNN،
            يتعلم المشاركون كيف تجمع CNN المعلومات، وتتحقق من المصادر وتنتج
            محتوى لمنصاتها المتعددة.
          </p>
          <p className="paragraph">
            سيكمل المشاركون عشر دورات أساسية حول موضوعات مثل الأخلاق في الصحافة
            وفن سرد القصص والتغطية الإخبارية العاجلة. ستجمع هذه الدورات بين
            الأعمال التدريبية في CNN Academy Hub وورش العمل الحية مع مدربي
            وصحفيي CNN Academy
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
