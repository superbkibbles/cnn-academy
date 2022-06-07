import AboutCnn from "../../components/ar/aboutCnn";
import Apply from "../../components/ar/apply";
import ApplyArea from "../../components/ar/applyArea";
import ApplyDate from "../../components/ar/applyDate";
import Footer from "../../components/ar/footer";
import Header from "../../components/ar/header";
import Overview from "../../components/ar/overview";
import Pricing from "../../components/ar/pricing";
import Skills from "../../components/ar/skills";
import Structure from "../../components/ar/structure";
import Certificate from "../../components/ar/certificate";

const CnnArabic = () => {
  return (
    <div>
      <Header />

      <Overview />

      <Skills />

      <AboutCnn />

      <Certificate />

      <Structure />

      <Apply />

      <ApplyDate />

      <Pricing />

      {/* <ApplyArea /> */}

      <Footer />
    </div>
  );
};

export default CnnArabic;
