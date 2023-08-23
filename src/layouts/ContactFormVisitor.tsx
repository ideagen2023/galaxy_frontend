import React from "react";
import useEmail from "../hooks/useEmailContact";

import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
import CircularProgress from "@mui/material/CircularProgress";

const ContactFormVisitor = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage: Language) => {
    setSelectedLanguage(newLanguage);
  };
  const lang=translation[selectedLanguage];
  const {
    formik: { values, handleChange, handleSubmit, errors, isSubmitting },
  } = useEmail();

  return (
    <form className="formcontainer" onSubmit={handleSubmit}>
      <h2 className="fw-bold mb-4">{lang.contact.formtitle}.</h2>
      <div className="relative">
      <input
        type="email"
        placeholder={lang.contact.placeholderemail}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <div className="helper-text">{errors.email}</div>}
      </div>
      <div className="relative">
      <input
        type="text"
        placeholder={lang.contact.placeholderName}
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <div className="helper-text">{errors.name}</div>}
      </div>
      <div className="relative">
      <input
        type="number"
        placeholder={lang.contact.placeholderNumber}
        name="number"
        value={values.number}
        onChange={handleChange}
      />
      {errors.number && <div className="helper-text">{errors.number}</div>}
      </div>
      <div className="relative">
      <textarea
        placeholder={lang.contact.placeholderQuery}
        style={{ height: "100px" }}
        name="question"
        value={values.question}
        onChange={handleChange}
      />
      {errors.question && <div className="helper-text">{errors.question}</div>}
      </div>
      <button type="submit"  className="form-btn" disabled={isSubmitting}>
        {lang.contact.cta}
        {isSubmitting && <CircularProgress style={{position: "absolute",color:"white",top:"7px"}} />}
      </button>
    </form>
  );
};

export default ContactFormVisitor;
