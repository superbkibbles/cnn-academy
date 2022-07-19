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
            ئەکادیمیای سی ئێن ئێن و شاری میدیايی هەولێر به‌هاوبه‌شي کۆرسێکی
            رۆژنامه‌وانيى ١٢ هەفتەیی ئه‌نجامده‌ده‌ن کە ئامانجی رێنيشاندانى نەوەی
            داهاتووی ڕۆژنامەنووسانه‌ لە عێراق.
          </p>
          <p className="paragraph">
            له‌ رێگه‌ى ۆرکشۆپ و سیمیناری ئۆنلاینه‌وه‌ لەگەڵ ڕۆژنامەنووسانی باڵاى
            سی ئێن ئێن، بەشداربووان فێردەبن چۆن سی ئێن ئێن زانیاری کۆدەکاتەوە،
            سەرچاوەکانی پشتڕاستدەکاتەوە و ناوەڕۆک دروستدەکات بۆ پلاتفۆرمە
            هەمەجۆرەکانی.
          </p>
          <p className="paragraph">
            بەشداربووان ١٠ کۆرسی سەرەکی وەردەگرن سەبارەت بە بابەتەکانی رەوشتی
            ڕۆژنامەوانیی، هونەری گێڕانەوەی چیرۆک، روماڵکردنی هەواڵی بەپەلە، هتد.
            ئەم کۆرسانە کاری قوتابییان لە ناوەندی ئەکادیمیای سی ئێن ئێن و
            ۆرکشۆپی راستەوخۆ لەلایەن راهێنەران و ڕۆژنامەنووسانی ئەکادیمیای سی
            ئێن ئێنەوە دەگرنەوە.
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
