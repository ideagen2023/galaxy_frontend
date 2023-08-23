
import CircularProgress from "@mui/material/CircularProgress";
import useReferral from "../hooks/useReferral";
import HalfBanner from "./halfBanner";
import { useLanguage, Language } from '../layouts/navigation/translation';
import translation from "../../translation.json";
const ReferralForm = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const lang=translation[selectedLanguage];
  const {
    formik: { values, handleChange, handleSubmit, errors, isSubmitting },
  } = useReferral();
  return (
  <>
    <HalfBanner title={lang.enquire.enquiry} titletwo=""/>
    <section className="contact bg-pri">
      <div className="container py-6">
        <div className="row">
            <div className="form-wrapper">
              <form onSubmit={handleSubmit} className="formcontainer enquiry">
                <h2 className="fw-bold mb-4">{lang.referral.partone}</h2>

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
                  <label>{lang.enquire.labelAddress}</label>
                  <input
                    type="text"
                    placeholder={lang.enquire.placeholderAddress}
                    name="participant_address"
                    value={values.participant_address}
                    onChange={handleChange}
                  />
                {errors.participant_address && <div className="helper-text">{errors.participant_address}</div>}
                </div>

                <div className="relative">
                  <label>{lang.enquire.labelEmail}</label>
                  <input
                    type="email"
                    placeholder={lang.enquire.placeholderEmail}
                    name="participant_email"
                    value={values.participant_email}
                    onChange={handleChange}
                  />
                {errors.participant_email && <div className="helper-text">{errors.participant_email}</div>}

                </div>

                <div className="relative">
                  <label>{lang.enquire.labelNumber}</label>
                  <input
                    type="tel"
                    placeholder={lang.enquire.placeholderNumber}
                    name="participant_contact_number"
                    value={values.participant_contact_number}
                    onChange={handleChange}
                  />
                {errors.participant_contact_number && <div className="helper-text">{errors.participant_contact_number}</div>}

                </div>

                <div className="relative">
                  <label>{lang.enquire.labeldob}</label>
                  <input
                    type="date"
                    placeholder={lang.referral.enqd}
                    name="participant_date_of_birth"
                    value={values.participant_date_of_birth}
                    onChange={handleChange}
                  />
                {errors.participant_date_of_birth && <div className="helper-text">{errors.participant_date_of_birth}</div>}

                </div>
                <div className="relative">
                  <label>{lang.referral.labelGender} </label><br></br>
                  <input type="radio" name="participant_gender"
                  onChange={handleChange}
                  value="male"/> {lang.referral.labelMale}
                  <input type="radio" name="participant_gender"
                  onChange={handleChange}
                   value="female"/> {lang.referral.labelFemale}
                  <input type="radio" name="participant_gender"
                  onChange={handleChange}
                   value="others"/> {lang.referral.labelOthers}
                {errors.participant_gender && <div className="helper-text radio">{errors.participant_gender}</div>}

                </div>
                <div className="relative">
                  <label>{lang.enquire.labelSupportHour}</label>
                  <input
                    type="text"
                    placeholder={lang.enquire.placeholderSupportHour}
                    name="participant_support_hours"
                    value={values.participant_support_hours}
                    onChange={handleChange}
                  />
                {errors.participant_support_hours && <div className="helper-text radio">{errors.participant_support_hours}</div>}

                </div>

                <div className="relative">
                  <label>{lang.enquire.labelRisk}</label>
                  <input
                    type="text"
                    placeholder={lang.enquire.placeholderRisk}
                    name="participant_any_risk"
                    value={values.participant_any_risk}
                    onChange={handleChange}
                  />
                {errors.participant_any_risk && <div className="helper-text radio">{errors.participant_any_risk}</div>}

                </div>
                <div className="relative">
                  <label>{lang.enquire.labelDesc}</label>           
                  <textarea
                    placeholder={lang.enquire.placeholderDesc}
                    style={{ height: "100px" }}
                    name="participant_desc_support"
                    value={values.participant_desc_support}
                    onChange={handleChange}
                  />
                {errors.participant_desc_support && <div className="helper-text radio">{errors.participant_desc_support}</div>}

                </div>


                <h2 className="fw-bold my-4">{lang.referral.parttwo}</h2>

                <div className="relative">
                  <label htmlFor="plan_funding">{lang.referral.plan_funding}</label><br></br>
                  <input type="checkbox" id="plan_funding" name="invoicing_plan_funding" value="self-managed"/> {lang.referral.self_man}
                  <input type="checkbox" id="plan_funding" name="invoicing_plan_funding" value="plan managed"/> {lang.referral.plan_managed}
                </div>
                <br/>

                <div className="relative bold">
                  <label>{lang.referral.invo_part}</label>
                  <fieldset className="border p-4">
                  <div className="relative">
                    <label>{lang.enquire.labelName}</label>
                    <input
                      type="text"
                      placeholder={lang.enquire.placeholderName}
                      name="invoicing_particular_name"
                      value={values.invoicing_particular_name}
                      onChange={handleChange}
                    />
                    {errors.invoicing_particular_name && <div className="helper-text radio">{errors.invoicing_particular_name}</div>}

                  </div>
                  <div className="relative">
                    <label>{lang.enquire.labelEmail}</label>
                    <input
                      type="email"
                      placeholder={lang.enquire.placeholderEmail}
                      name="participant_email"
                      value={values.participant_email}
                      onChange={handleChange}
                    />
                  {errors.participant_email && <div className="helper-text radio">{errors.participant_email}</div>}
                  </div>
                  </fieldset>
                </div>

                <h2 className="fw-bold my-4">{lang.referral.partthree}</h2>

                <div className="relative">
                  <label>{lang.referral.labelliving_situatuion}</label>
                  <textarea
                    style={{height:"100px"}}
                    placeholder={lang.referral.placeholderliving_situatuion}
                    name="participant_living_situatuion"
                    value={values.participant_living_situatuion}
                    onChange={handleChange}
                  />
                  {errors.participant_living_situatuion && <div className="helper-text radio">{errors.participant_living_situatuion}</div>}

                </div>

                <div className="relative">
                  <label>{lang.referral.labelcurrent_behavioural_plan}</label><br></br>
                  <input type="radio" name="participant_current_behavioural_plan" onChange={handleChange} value="yes"/> Yes
                  <input type="radio" name="participant_current_behavioural_plan" onChange={handleChange} value="no"/> No
                  {errors.participant_current_behavioural_plan && <div className="helper-text radio">{errors.participant_current_behavioural_plan}</div>}

                </div>

                  <label htmlFor="mobility" className="mt-3">{lang.referral.mobility}</label>
                  <fieldset className="border p-4">
                    <div className="relative">
                      <label>{lang.referral.mobility_mode}</label><br/>
                      <input type="checkbox" id="mobility" name="participant_mobility_need_assistance" value="yes"/> {lang.referral.need_assistance}
                      <input type="checkbox" id="mobility" name="participant_mobility_independent" value="yes"/> {lang.referral.independence}<br></br>
                      <div className="relative">
                      <label>{lang.referral.plz_mention_other_mobility}</label>
                      <textarea style={{height:"100px"}}
                    value={values.participant_mobility_desc}
                    onChange={handleChange}
                    placeholder={lang.referral.pd} name="participant_mobility_desc"/>
                      {errors.participant_mobility_desc && <div className="helper-text radio">{errors.participant_mobility_desc}</div>}

                      </div>
                    </div>
                  </fieldset>

                  <div className="relative">
                    <label htmlFor="communication" className="mt-4">{lang.referral.comm}</label><br />
                  <fieldset className="border p-4">
                      <label>{lang.referral.comm_mode}</label><br />
                    <input type="checkbox" id="communication" name="participant_comm_need_assitance" value="yes"/> {lang.referral.need_assistance}
                    <input type="checkbox" id="communication" name="participant_comm_perfer" value="verbally"/> {lang.referral.verbally}
                    <input type="checkbox" id="communication" name="participant_comm_perfer" value="auslan"/> {lang.referral.auslan}
                    <input type="checkbox" id="communication" name="participant_comm_perfer" value="non-verbal"/> {lang.referral.nv}
                    <input type="checkbox" id="communication" name="participant_comm_perfer" value="point or gesture"/> {lang.referral.pg}
                    <input type="checkbox" id="communication" name="participant_comm_perfer" value="ipad"/> {lang.referral.ipad}<br></br>
                    <div className="relative">
                    <label>{lang.referral.comm_opt}</label>
                    <textarea style={{height:"100px"}} placeholder={lang.referral.pd}
                              value={values.participant_comm_desc}
                              onChange={handleChange}
                    name="participant_comm_desc"/>
                    {errors.participant_comm_desc && <div className="helper-text radio">{errors.participant_comm_desc}</div>}

                    </div>
                  </fieldset>
                  </div>

              <div className="relative">

              <label htmlFor="personal_care" className="mt-4">{lang.referral.cforassi}</label><br/>
                
              <fieldset className="border p-4">
                <label>{lang.referral.assi_mode}</label><br></br>

                <input type="checkbox" id="personal_care" name="participant_personal_care_need_assistance" value="yes"/> {lang.referral.pc}

                <input type="checkbox" id="transfer" name="participant_transfer_need_assistance" value="yes"/> {lang.referral.trans}

                <input type="checkbox" id="eating_drinking" name="participant_eatinganddrinking_need_assistance" value="yes"/> {lang.referral.ed}

                <input type="checkbox" id="continence" name="participant_continence_need_assistance" />{lang.referral.conti}
                
                <input type="checkbox" id="cald_background" name="participant_cald_background_need_assistance" value="yes"/> {lang.referral.cladbg}<br></br>

                <div className="relative">
                <label>{lang.referral.pmoao}</label>
                <textarea placeholder={lang.referral.pd} style={{ height: "100px" }} name="participant_continence_desc"
                  value={values.participant_continence_desc}
                  onChange={handleChange}/>
                {errors.participant_continence_desc && <div className="helper-text">{errors.participant_continence_desc}</div>}
                </div>
                <div className="relative">
                <label>{lang.referral.wp}</label>
                <textarea
                  placeholder={lang.referral.mengenskill}
                  style={{ height: "100px" }}
                  name="participant_work_preferences_desc"
                  value={values.participant_work_preferences_desc}
                  onChange={handleChange}
                  />
                {errors.participant_work_preferences_desc && <div className="helper-text">{errors.participant_work_preferences_desc}</div>}
                </div>


              </fieldset>
              </div>

              <h2 className="fw-bold my-4">{lang.referral.partfour}</h2>
                <div className="relative">
                <input
                  type="email"
                  placeholder={lang.contact.placeholderemail}
                  name="referrer_email"
                  value={values.referrer_email}
                  onChange={handleChange}
                />
                {errors.referrer_email && <div className="helper-text">{errors.referrer_email}</div>}
                </div>
                <div className="relative">
                <input
                  type="text"
                  placeholder={lang.contact.placeholderName}
                  name="referrer_name"
                  value={values.referrer_name}
                  onChange={handleChange}
                />
                {errors.referrer_name && <div className="helper-text">{errors.referrer_name}</div>}
                </div>
                <div className="relative">
                <input
                  type="text"
                  placeholder={lang.contact.placeholderNumber}
                  name="referrer_contact_number"
                  value={values.referrer_contact_number}
                  onChange={handleChange}
                />
                {errors.referrer_contact_number && <div className="helper-text">{errors.referrer_contact_number}</div>}
                </div>
                <div className="relative">
                <textarea
                  placeholder={lang.contact.placeholderQuery}
                  style={{ height: "100px" }}
                  name="referrer_remark"
                  value={values.referrer_remark}
                  onChange={handleChange}
                />
                {errors.referrer_remark && <div className="helper-text">{errors.referrer_remark}</div>}
                </div>
              <button type="submit" className="form-btn" disabled={isSubmitting}>
                {lang.enquire.cta}
                {isSubmitting && <CircularProgress style={{position: "absolute",color:"white",top:"7px"}} />}
              </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  </>
  );
};
export default ReferralForm;
