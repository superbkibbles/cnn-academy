import AboutCnn from "../../components/en/aboutCnn";
import Apply from "../../components/en/apply";
import ApplyArea from "../../components/en/applyArea";
import ApplyDate from "../../components/en/applyDate";
import Certificate from "../../components/en/certificate";
import Footer from "../../components/en/footer";
import Header from "../../components/en/header";
import Overview from "../../components/en/overview";
import Pricing from "../../components/en/pricing";
import Skills from "../../components/en/skills";
import Structure from "../../components/en/structure";

const CnnEnglish = () => {
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

export default CnnEnglish;
