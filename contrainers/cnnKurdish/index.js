import AboutCnn from "../../components/kur/aboutCnn";
import Apply from "../../components/kur/apply";
import ApplyArea from "../../components/kur/applyArea";
import ApplyDate from "../../components/kur/applyDate";
import Footer from "../../components/kur/footer";
import Header from "../../components/kur/header";
import Overview from "../../components/kur/overview";
import Pricing from "../../components/kur/pricing";
import Skills from "../../components/kur/skills";
import Structure from "../../components/kur/structure";
import Certificate from "../../components/kur/certificate";

const CnnKurdish = () => {
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

export default CnnKurdish;
