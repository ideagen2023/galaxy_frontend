
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import { Link } from "react-router-dom";
import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
import ContactSection from "../layouts/ContactSection";


const HomePage = () => {
    //lang
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    const handleLanguageChange = (newLanguage: Language) => {
      setSelectedLanguage(newLanguage);
    };
    const lang=translation[selectedLanguage];
  return (
  <>
      <section className="hero">
        <div className="container d-flex justify-content-center flex-column align-items-center">
            <div className="row py-5 v-center">
              <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bold m-0">{lang.landing.title}</h1>
              <h5 className="py-4 mb-3 txt-sec">{lang.landing.description}</h5>
              <Link to='/' className="btn-pri">
                {lang.landing.cta}
              </Link>
              </div>
              <div className="col-lg-6 col-md-12 col-12 text-center">
              <img src="https://ik.imagekit.io/lt20pon3d/artwork/inclusion24%20_Converted_.png?updatedAt=1692509484526" alt="" />
              </div>
            </div>
        </div>
      </section>
      <section className="vmo">
        <div className="container py-6">
          <h1 className="fw-bold text-center px-sm-head">{lang.mvoheader.title}</h1>
          <h4 className="txt-sec text-center mb-5 px-sm-sub">{lang.mvoheader.desc}</h4>
          <div className="row">
              {lang.mvo.map((item,i)=>
                <div className="col-md-4 col-12" key={i}>
                  <div className={`card`} >
                  <img src={item.icon} width="100px" className=""/>
                  <img src={item.icon} width="100px" className="right-bottom-abs"/>
                  <h2 className="fw-bold mt-4">{item.title}</h2>
                  <p className="clamp-5 my-4 txt-sec">{item.desc}</p>
                  <Link to='/about' className="btn-pri">{item.cta}</Link>
                  </div>
                </div>
              )}
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container py-6">
          <div className="row v-center">
            <div className="col-lg-6 col-md-12 col-12">
              <h1 className="fw-bold">{lang.about.heading}</h1>
              <p className="py-4">{lang.about.desc}</p>
              <Link to='/about' className="btn-pri">
                {lang.about.cta}
              </Link>

            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-600,h-600/artwork/Untitled-1.png?updatedAt=1692521944620" alt="" className="col-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container py-6">
          <h1 className="fw-bold text-center px-sm-head">{lang.servicesheading.title}</h1>
          <h4 className="txt-sec text-center mb-5 px-sm-sub">{lang.servicesheading.desc}</h4>
          <div className="row">
          {lang.services.map((item,i)=>(
            <div className="col-lg-3 col-md-4 col-12">
              <Link to= {`/services/${item?.link}`}>
                <div className="card">
                  <div className="img-wrapper">
                    <img src={item.icon} alt="" className="m-0" />
                  </div>
                    <h4 className="my-3 clamp-2">{item.title}</h4>
                    <p>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
          </div>
        </div>

      </section>
      <section className="gallery oh">
        <div className="container relative py-6">
          <div className="txt-abs">
            <h1 className="fw-bold">{lang.gallery.title}</h1>
            <h5 className="py-4 mb-3 txt-sec" style={{width:"500px"}}>{lang.gallery.desc}</h5>
            <Link to='/' className="btn-pri">
              {lang.gallery.cta}
            </Link>
          </div>
          <div className="row">
            <div className="col-md-4 col-6 r-1">
              <div className="img-wrapper">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-500,h-500/img/childcare.jpg?updatedAt=1692264754446"></img>
              </div>
            </div>
            <div className="col-md-4 col-6 r-2">
              <div className="img-wrapper">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-500,h-500/img/care.jpg?updatedAt=1692264616370"></img>
              </div>
              <div className="img-wrapper">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-500,h-500/img/senior-woman-with-her-caregiver-outdoor.jpg?updatedAt=1692595269752"></img>
              </div>
            </div>
            <div className="col-md-4 col-6 r-3">
              <div className="img-wrapper">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-500,h-500/img/full-shot-woman-with-crutches.jpg?updatedAt=1692595269419"></img>
              </div>
              <div className="img-wrapper">
              <img src="https://ik.imagekit.io/lt20pon3d/tr:w-500,h-500/img/granddaughter-talking-with-her-grandmother-sitting-wheelchair-cheerful-concept-happy-family.jpg?updatedAt=1692595269677"></img>
              </div>
            </div>
          </div>
        
          
        </div>
      </section>
      <section className="contact">
        <ContactSection/>
      </section>

  </>
  );
};

export default HomePage;
