import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import data from '../../data.json';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LocalPhoneOutlined, PhoneAndroidOutlined, WhatsApp } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { useLanguage, Language } from './navigation/translation';
import { Translations } from '../assets/types/translation';
import SettingsIcon from '@mui/icons-material/Settings';

import translation from "../../translation.json";
const NavigationBar = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  //lang
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage: Language) => {
    setSelectedLanguage(newLanguage);
  };
  const lang=translation[selectedLanguage];
  const availableLanguages = ['en', 'ar', 'el','tr', 'mk', 'fa', 'it', 'zh', 'vi'];

  //setting toggle
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setSettingsOpen(prevState => !prevState);
  };
  return (      
    <>
      <Navbar collapseOnSelect expand="lg" fixed='top' className='d-flex flex-column p-0 bg-pri'>
      <Navbar className='w-100 lb-lb'>
        <div className="container d-flex top">
          <div className='nav-social-icons'>
            <a href="https://www.facebook.com/" target="_blank"> 
              <div className="icon pngwhite">
                <FacebookIcon/>
              </div>
            </a>
            <a href='https://twitter.com' target="_blank">
              <div className="icon pngwhite">
                <TwitterIcon/>
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className="icon pngwhite">
              <InstagramIcon/>
              </div>
            </a>
            <a href="https://www.tiktok.com/@safal_international_edu" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/128/5969/5969008.png" width="33" className="pngwhite icon"/>
            </a>
            <a href="https://www.tiktok.com/@safal_international_edu" target="_blank">
            <div className="icon pngwhite">
              <LinkedInIcon/>
              </div>
            </a>
          </div>
          <div className='a-link'>
          <a href="mailto:info@galaxycare.com.au">
            <EmailOutlinedIcon/>info@galaxycare.com.au
          </a>
          </div>
          <div className='a-link'>          
          <a href="tel:+610403748132">         
            <LocalPhoneOutlined/>04 0374 8132 , 
            </a>
            <a href="tel:+610414433512">04 1443 3512
            </a>
          </div>
          </div>
      </Navbar>
        <Container>
        <Navbar.Brand>
          <Link to="/">
              <img
                src={logo}
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className='align-items-center'>
            <Nav.Link className='fw-bold mx-2'>
                  <Link to="/about">
                  {lang.navbar.about_us}
                  </Link>
              </Nav.Link>
              <NavDropdown title={lang.navbar.our_services} id="collasible-nav-dropdown" className='fw-bold mx-2'>
              {lang.services.map((item,i)=>(
                      <div className='d-flex' key={i}>    
                      <NavDropdown.Item>
                          <Link to={`/services/${item?.link}`}>
                          <div className='d-flex v-center p-1'>
                              <img width="50" src={item.icon} className='nav-icon'></img>
                              <div className='px-2'>
                                  <h6 className='mb-0 to-150'>{item.title}</h6>
                              </div>
                          </div> 
                          </Link>
                      </NavDropdown.Item>
                  </div>
              ))}
              </NavDropdown>
              <Nav.Link className='fw-bold mx-2'>
                  <Link to="/referral">
                    {lang.navbar.referral}
                  </Link>
              </Nav.Link>
              <Nav.Link className='fw-bold mx-2'>
                  <Link to="/gallery">
                    {lang.navbar.gallary}
                  </Link>
              </Nav.Link>
              <Nav.Link className='fw-bold mx-2'>
                  <Link to="/contact">
                    {lang.navbar.contact}
                  </Link>
              </Nav.Link>
              <Nav.Link>
                  <Link to="/enquire">
                  <div className='btn-pri fc-white'>
                  {lang.navbar.enquire_now}
                  </div>
                  </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`btn-fixed ${settingsOpen ? 'rotate' : ''}`} onClick={toggleSettings}>
        <SettingsIcon fontSize='large'/>
      </div>
      <div className={`settings ${settingsOpen ? 'settings' : ''}`} style={settingsOpen ? { right: '20px' } : {}} >
        <div className="wrapper">
          <div className='p-2 d-flex flex-column'>
            <label className='txt-sec fw-bold'>{lang.setting.titleone}</label>
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value as Language)}
            >
              {availableLanguages.map(lang => (
                <option key={lang} value={lang}>
                  {lang === 'en' ? 'English' :lang === 'ar' ? 'عربي' : lang === 'el' ? 'Ελληνικά' : lang === 'tr' ? 'Türkçe' : lang === 'mk' ? 'Македонски' : lang === 'fa' ? 'فارسی' : lang === 'it' ? 'Italiano' : lang === 'zh' ? '中文' : lang === 'vi' ? 'Tiếng Việt' : lang}
                </option>
              ))}
            </select>  
          </div>  
          <div className='p-2 d-flex flex-column'>
            <label className='txt-sec fw-bold'>{lang.setting.titletwo}</label>
            <label className="switch-container">
              <input type="checkbox" onChange={toggleTheme} />
              <span className="slider"></span>
            </label>  
          </div>
        </div> 
      </div>
    </>
  );
}

export default NavigationBar;