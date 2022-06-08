import styles from "./overview.module.css";

const Overview = () => {
  return (
    <section className={styles.overview} id="overview">
      <h2 className="heading-2" style={{ textAlign: "center" }}>
        پوختەی کۆرس
      </h2>

      <div className={styles.overviewContainer}>
        <div className={styles.textContainer}>
          <h3 className="heading-3">
            فێربە چۆن زانیاری کۆدەکەیەوە و دووپاتيدەکەیەوە و راپۆرت دەکەی وەکو
            سی ئێن ئێن.
          </h3>
          <p className="paragraph">
            ئەکادیمیای سی ئێن ئێن و میدیای شاری هەولێر هاوبەشیدەکەن بۆ هێنانی
            کۆرسێکی ١٢ هەفتەیی کە ئامانجی هیوا بەخشینە بە نەوەی داهاتووی
            ڕۆژنامەنووسان لە عێراق.
          </p>
          <p className="paragraph">
            بە ۆرکشۆپی ئۆنلاین و سیمیناری ئۆنلاین لەگەڵ ڕۆژنامەنووسانی سی ئێن
            ئێن، بەشداربووان فێردەبن چۆن سی ئێن ئێن زانیاری کۆدەکاتەوە و
            سەرچاوەکانی پشتڕاست دەکاتەوە و ناوەڕۆک دروست دەکات بۆ پلاتفۆرمە هەمە
            جۆرەکانی.
          </p>
          <p className="paragraph">
            لەماوەی حەفتەکانی یەکەمی پڕۆگرامەکە، بەشداربووان ١٠ دە کۆڕسی سەرەکی
            تەواو دەکەن لەسەر بابەتەکانی وەک خووڕەوشت لە ڕۆژنامەوانی و هونەری
            چیرۆک گێڕانەوە و باسکردنی هەواڵی بەپەلە و هتد. ئەو کۆرسانە یەکدەگرن
            لەگەڵ کاری قوتابییان لە تەوەرەی ئەکادیمیای سی ئێن ئێن و ۆرکشۆپی
            راستەوخۆ لەلایەن راهێنەران و ڕۆژنامەنووسانی ئەکادیمیای سی ئێن ئێن.
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
