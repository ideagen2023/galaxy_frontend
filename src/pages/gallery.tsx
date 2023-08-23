import { Link } from "react-router-dom";
import HalfBanner from "../layouts/halfBanner";
import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
import Contact from "./contact";
import ContactSection from "../layouts/ContactSection";
const Gallery = () => {
  //lang
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage: Language) => {
    setSelectedLanguage(newLanguage);
  };
  const lang=translation[selectedLanguage];

  return (
    <>
        <section>
            <HalfBanner title={lang.gallery.np_title} titletwo={lang.gallery.np_sub}  />        
        </section>
        <section className="gallery">
            <div className="container py-6">
            <h1 className="fw-bold text-center px-sm-head">{lang.gallery.title}</h1>
          <h4 className="txt-sec text-center mb-5 px-sm-sub">{lang.gallery.desc}</h4>
                <div className="row">
                {lang.gallery.images.map((item,i)=>(
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="img-wrapper">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        <ContactSection/>
    </>
  );
};

export default Gallery;
