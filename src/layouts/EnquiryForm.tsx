
import CircularProgress from "@mui/material/CircularProgress";
import useEnquire from "../hooks/useEnquire";
import HalfBanner from "./halfBanner";
import LeftToRight from "../assets/animation/LeftToRight";
import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import { Email } from "@mui/icons-material";
const EnquiryForm = () => {
  const {
    formik: { values, handleChange, handleSubmit, errors, setFieldValue, isSubmitting },
  } = useEnquire();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const lang=translation[selectedLanguage];
  return (
  <>
    <HalfBanner title={lang.enquire.enquiry} titletwo=""/>
    <section className="contact bg-pri">
      <div className="container py-6">
        <div className="row">
          <div className="col-md-6 col-12 ">
            <div className="st-150">
                <LeftToRight delay={0.0}>
                <h1 className="fs-1 fc-bo fw-bold">{lang.enquire.contacttitle}</h1>
                </LeftToRight>
                <LeftToRight delay={0.1}>
                <p className="fs-5 py-4">{lang.enquire.contactdesc}</p>
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
          <div className="col-md-6 col-12">
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} className="formcontainer">
              <h2 className="fw-bold mb-4">{lang.enquire.formtitle}</h2>
                <div className="relative">
                <label>{lang.enquire.labelName}</label>
                <input
                  type="text"
                  placeholder={lang.enquire.placeholderName}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="helper-text">{errors.name}</div>}  
                </div>
                <div className="relative">
                <label>{lang.enquire.labelEmail}</label>
                <input
                  type="text"
                  placeholder={lang.enquire.placeholderEmail}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.name && <div className="helper-text">{errors.email}</div>}
                </div>
                <div className="relative">
                <label>{lang.enquire.labelAddress}</label>
                <input
                  type="text"
                  placeholder={lang.enquire.placeholderAddress}
                  name="enq_address"
                  value={values.enq_address}
                  onChange={handleChange}
                />
                {errors.enq_address && <div className="helper-text">{errors.enq_address}</div>}
                </div>
                <div className="relative">
                <label>{lang.enquire.labelNumber}</label>
                <input
                  type="tel"
                  placeholder={lang.enquire.placeholderNumber}
                  name="enq_contact"
                  value={values.enq_contact}
                  onChange={handleChange}
                />
                {errors.enq_contact && <div className="helper-text">{errors.enq_contact}</div>}
                </div>
                <div className="relative">
                <label>{lang.enquire.labeldob}</label>
                <input
                  type="date"
                  placeholder="Enquiry Date"
                  name="enq_date"
                  value={values.enq_date}
                  onChange={handleChange}
                />
                {errors.enq_date && <div className="helper-text">{errors.enq_date}</div>}
                </div>
                <div className="relative">
                <label>{lang.enquire.labelSupportHour}</label>
                <input
                  type="text"
                  placeholder={lang.enquire.placeholderSupportHour}
                  name="enq_support_hour"
                  value={values.enq_support_hour}
                  onChange={handleChange}
                />
                {errors.enq_support_hour && <div className="helper-text">{errors.enq_support_hour}</div>}
                </div>
                <div className="relative">
                <label>{lang.enquire.labelRisk}</label>
                  <input
                  type="text"
                  placeholder={lang.enquire.placeholderRisk}
                  name="enq_any_risk"
                  value={values.enq_any_risk}
                  onChange={handleChange}
                />
                {errors.enq_any_risk && <div className="helper-text">{errors.enq_any_risk}</div>}
                </div>
                <div className="relative">
                <label>{lang.enquire.labelDesc}</label>           
                <textarea
                  placeholder={lang.enquire.placeholderDesc}
                  style={{ height: "100px" }}
                  name="enq_support_description"
                  value={values.enq_support_description}
                  onChange={handleChange}
                />
                {errors.enq_support_description && <div className="helper-text">{errors.enq_support_description}</div>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                  {isSubmitting && <CircularProgress style={{position: "absolute",color:"white",top:"7px"}} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};
export default EnquiryForm;
