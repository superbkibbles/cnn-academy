import styles from "./overview.module.css";

const Overview = () => {
  return (
    <section className={"section"} id="overview">
      <div className={styles.overview}></div>
      <h2 className="heading-2">نظرة عامة على الدورة التدريبية</h2>
      <p className="paragraph">
        من خلال ورش العمل وجلسات الندوات عبر الإنترنت مع كبار صحفيي CNN، يتعلم
        المشاركون كيف تجمع CNN المعلومات، وتتحقق من المصادر وتنتج محتوى لمنصاتها
        المتعددة.
      </p>
      <p className="paragraph">
        خلال الأسابيع الأولى من البرنامج، سيكمل المشاركون عشر دورات أساسية حول
        موضوعات مثل الأخلاق في الصحافة، وفن سرد القصص، والتغطية الإخبارية
        العاجلة، وما إلى ذلك. ستجمع هذه الدورات بين الدورات الدراسية في CNN
        Academy Hub وورش عمل مباشرة مع صحفيي ومدربي أكاديمية CNN.
      </p>
    </section>
  );
};

export default Overview;
