import HalfBanner from "../layouts/halfBanner";
import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
import { Link } from "react-router-dom";
import ContactSection from "../layouts/ContactSection";

const About = () => {
  //lang
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const lang=translation[selectedLanguage];
  return (
    <>
      <section className="">
        <div className="container py-6">
          <div className="row v-center col-rev">
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bold">{lang.about.heading}</h1>
              <p className="py-4">{lang.about.desc}</p>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-600,h-600/artwork/Untitled-1.png?updatedAt=1692521944620" alt="" className="col-img" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-6">
          <h1 className="fw-bold text-center px-sm-head">{lang.about.why}</h1>
          <h4 className="txt-sec text-center mb-5 px-sm-sub">{lang.mvoheader.desc}</h4>
          <div className="row">
          {lang.about.whypoints.map((item,i)=>(
            <div className="col-lg-2 col-md-4 col-6">
                <div className="card align-items-center">
                  <div className="img-wrapper sm">
                    <img src={item.icon} alt="" />
                  </div>
                    <h6 className="my-3 text-center">{item.point}</h6>
                </div>
            </div>
          ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-6">
          <div className="row v-center">
            <div className="col-lg-6 col-md-12 col-12">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-600,h-600/artwork/Untitled-1.png?updatedAt=1692521944620" alt="" className="col-img" />
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bold">{lang.mvo[0].title}</h1>
              <p className="py-4">{lang.mvo[0].desc}</p>
              <Link to='/enquire' className="btn-pri">
                {lang.mvo[0].cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-6">
          <div className="row v-center">
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bold">{lang.mvo[1].title}</h1>
              <p className="py-4">{lang.mvo[1].desc}</p>
              <Link to='/enquire' className="btn-pri">
                {lang.mvo[1].cta}
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-600,h-600/artwork/Untitled-1.png?updatedAt=1692521944620" alt="" className="col-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-6">
          <div className="row v-center">
            <div className="col-lg-6 col-md-12 col-12">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-600,h-600/artwork/Untitled-1.png?updatedAt=1692521944620" alt="" className="col-img" />
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bold">{lang.mvo[2].title}</h1>
              <p className="py-4">{lang.mvo[2].desc}</p>
              <Link to='/enquire' className="btn-pri">
                {lang.mvo[2].cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactSection/>
    </>
  );
};

export default About;
