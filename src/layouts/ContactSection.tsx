import LeftToRight from "../assets/animation/LeftToRight";
import ContactFormVisitor from "./ContactFormVisitor";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import { Email } from "@mui/icons-material";

import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";

const ContactSection = () => {

    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    const handleLanguageChange = (newLanguage: Language) => {
      setSelectedLanguage(newLanguage);
    };
    const lang=translation[selectedLanguage];

    return (  
        <section className="contact relative oh">
        <img src="https://ik.imagekit.io/lt20pon3d/img/close-up-hand-wheel.jpg?updatedAt=1692588495129" className="bg-img" alt="" />
        <div className="container py-6">
          <div className="row v-center">
            <div className="col-md-6 col-12">
                <ContactFormVisitor/>
            </div>
            <div className="col-md-6 col-12">
                <LeftToRight delay={0.0}>
                <h1 className="fs-1 fc-bo fw-bold">{lang.contact.contacttitle}</h1>
                </LeftToRight>
                <LeftToRight delay={0.1}>
                <p className="fs-5 py-4">{lang.contact.contactdesc}</p>
                </LeftToRight>

                <ul className="p-0">
                  <LeftToRight delay={0}>
                  <a href="https://goo.gl/maps/bgVGCGJqaHcDbzdA9" target="_blank">
                  <li className="d-flex align-items-center my-4 gap-4">
                    <div className="cicon">
                      <LocationOnOutlinedIcon fontSize="large" />
                    </div>
                    <div>
                      <h4 className="mb-0 fc-bo fw-bold">{lang.contact.address}</h4>
                      <p className="m-0">16 Carver Circuit, Wollert</p>
                      <p className="m-0"> Victoria, 3750, Australia</p>
                    </div>
                  </li>
                  </a>
                  </LeftToRight>
                  <LeftToRight delay={0.1}>
                  <li className="d-flex align-items-center my-4 gap-4">
                    <div className="cicon" >
                      <PhoneEnabledOutlinedIcon fontSize="large" />
                    </div>
                    <div>
                      <h4 className="mb-0 fc-bo fw-bold">{lang.contact.phone}</h4>
                  <a href="tel:0403748132" >
                      <p className="m-0">04 0374 8132</p>
                  </a>
                  <a href="tel:0414433512" >
                      <p className="m-0">04 1443 3512</p>
                  </a>
                    </div></li>
                  </LeftToRight>
                  <LeftToRight delay={0.2}>
                  <li className="d-flex align-items-center my-4 gap-4">
                    <div className="cicon">
                      <Email fontSize="large" />
                    </div>
                    <div>
                      <h4 className="mb-0 fc-bo fw-bold">{lang.contact.email}</h4>
                      <a href="mailto:info@galaxycare.com.au ">
                          <p className="m-0">info@galaxycare.com.au </p>
                      </a>
                      <a href="mailto:devraj.lamichhane@galaxycare.com.au ">
                          <p className="m-0">devraj.lamichhane@galaxycare.com.au </p>
                      </a>
                    </div></li>
                    </LeftToRight>
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactSection;