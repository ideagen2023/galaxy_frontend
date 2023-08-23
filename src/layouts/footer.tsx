
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const currentYear = new Date().getFullYear();
import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import { Email, LinkedIn, Mail, Phone, Twitter } from "@mui/icons-material";

const Footer = () => {
  //lang
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage: Language) => {
    setSelectedLanguage(newLanguage);
  };
  const lang=translation[selectedLanguage];
  return (

      <div className='footer bg-brand-black'>
        <div className="container">
        <div className="py-5">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <img src={logo} alt="Safal International Education logo" className='pngwhitesolid' height={100} />
                    <p className="py-2 sub-footer-moto fc-white">{lang.footer.moto}</p>
                    <div className='social-icon'>
                      <a href="https://www.facebook.com/" target="_blank">
                      <FacebookIcon></FacebookIcon>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank">
                      <InstagramIcon></InstagramIcon>
                      </a>
                      <a href="https://twitter.com" target="_blank">
                      <Twitter></Twitter>
                      </a>
                      <a href="https://www.tiktok.com/" target="_blank" >
                        <img src="https://cdn-icons-png.flaticon.com/128/5969/5969008.png" width="24" className="pngwhitesolid m-0"/>
                      </a>
                      <a href="https://linkedin.com" target="_blank">
                      <LinkedIn></LinkedIn>
                      </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="fw-bold fc-lg">{lang.footer.quick_link}</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/about" className="nav-link fw-normal p-0">{lang.navbar.about_us}</Link></li>
                    <li className="nav-item mb-2"><Link to="/contact" className="nav-link fw-normal p-0">{lang.navbar.contact}</Link></li>
                    <li className="nav-item mb-2"><Link to="/referral" className="nav-link fw-normal p-0">{lang.navbar.referral}</Link></li>
                    <li className="nav-item mb-2"><Link to="/gallery" className="nav-link fw-normal p-0">{lang.navbar.gallary}</Link></li>
                    <li className="nav-item mb-2"><Link to="/enquire" className="nav-link fw-normal p-0">{lang.navbar.enquire_now}</Link></li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="fw-bold fc-lg">{lang.footer.our_services}</h5>
                    <ul className="nav flex-column">
                    {lang.services.map((item,i)=>(
                        <li className="nav-item mb-2" key={i}>
                          <Link to={`/services/${item?.link}`} className="nav-link fw-normal p-0">{item.title}</Link>
                          </li>
                      ))}
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="fw-bold fc-lg">{lang.footer.contact}</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                      <a href="https://goo.gl/maps/oZhAB7hqn5PBpXxa8" className="nav-link fw-normal p-0" target="_blank">
                          <LocationOnOutlinedIcon/>
                          16 Carver Circuit, Wollert
                          <br></br>
                          Victoria, 3750, Australia
                      </a>
                      </li>
                      <li className="nav-item mb-2">
                      <Mail/> 
                      <a href="mailto:info@galaxycare.com.au" className="nav-link fw-normal p-0" target="_blank">
                          info@galaxycare.com.au
                      </a>
                      </li>
                      <li className="nav-item mb-2">
                      <a href="tel:0403748132" className="nav-link fw-normal p-0" target="_blank">
                      <Phone/> 04 0374 8132,</a>
                      <a href="tel:0414433512" className="nav-link fw-normal p-0" target="_blank">
                       04 1443 3512
                      </a>     
                      </li>
                    </ul>
                </div>

            </div>
            <div className="border-top pt-4">
                <p className="text-center fc-white">Galaxy Care © {currentYear}. {lang.footer.cr}</p>
            </div>
          </div>
        </div>
      </div>  

  );
};

export default Footer;
