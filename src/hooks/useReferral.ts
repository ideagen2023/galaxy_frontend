import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type FormikState = {
  name: string;
  participant_address: string;
  participant_email: string;
  participant_contact_number: string;
  participant_date_of_birth: string;
  participant_gender: string;
  participant_support_hours: string;
  participant_any_risk: string;
  participant_desc_support: string;

  invoicing_plan_funding: string[]; // You may need to change the type to match the actual data
  invoicing_particular_name: string;
  invoicing_particular_email: string;
  participant_living_situatuion: string;
  participant_current_behavioural_plan: string;
  participant_mobility_need_assistance: string[]; // You may need to change the type to match the actual data
  participant_mobility_independent: string[]; // You may need to change the type to match the actual data
  participant_mobility_desc: string;
  participant_comm_need_assitance: string[]; // You may need to change the type to match the actual data
  participant_comm_perfer: string[]; // You may need to change the type to match the actual data
  participant_comm_desc: string;
  participant_personal_care_need_assistance: string[]; // You may need to change the type to match the actual data
  participant_transfer_need_assistance: string[]; // You may need to change the type to match the actual data
  participant_eatinganddrinking_need_assistance: string[]; // You may need to change the type to match the actual data
  participant_continence_need_assistance: string;
  participant_continence_desc: string;
  participant_cald_background_need_assistance: string;
  participant_work_preferences_desc: string;
  referrer_name: string;
  referrer_org: string;
  referrer_position: string;
  referrer_contact_number: string;
  referrer_email: string;
  referrer_remark: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  participant_email: yup
  .string()
  .required("Email is required")
  .email("Invalid email format"),
  participant_address: yup.string().required("Address is required"),
  participant_contact_number: yup
    .string()
    .required("Contact is required")
    .min(10, "Contact number can only have 10 digits")
    .max(10, "Contact number can only have 10 digits"),
  participant_date_of_birth: yup.string().required("Date is required"),
  participant_gender: yup.string().required("Gender is required"),
  participant_support_hours: yup.string().required("Support hour is required"),
  participant_any_risk: yup.string().required("Any risk is required"),
  participant_desc_support: yup.string().required("Support description is required"),
  invoicing_plan_funding: yup.array().required("Plan funding is required"),
  invoicing_particular_name: yup.string().required("Invoicing particular name is required"),
  invoicing_particular_email: yup
  .string()
  .required("Email is required")
  .email("Invalid email format"),
  participant_living_situatuion: yup.string().required("Living situation is required"),
  participant_current_behavioural_plan: yup.string().required("Current behavioral plan is required"),
  participant_mobility_need_assistance: yup.array().required("Mobility assistance is required"),
  participant_mobility_independent: yup.array().required("Mobility independent is required"),
  participant_mobility_desc: yup.string().required("Mobility description is required"),
  participant_comm_need_assitance: yup.array().required("Communication assistance is required"),
  participant_comm_perfer: yup.array().required("Communication preference is required"),
  participant_comm_desc: yup.string().required("Communication description is required"),
  participant_personal_care_need_assistance: yup.array().required("Personal care assistance is required"),
  participant_transfer_need_assistance: yup.array().required("Transfer assistance is required"),
  participant_eatinganddrinking_need_assistance: yup.array().required("Eating and drinking assistance is required"),
  participant_continence_need_assistance: yup.string().required("Continence assistance is required"),
  participant_continence_desc: yup.string().required("Continence description is required"),
  participant_cald_background_need_assistance: yup.string().required("CALD background assistance is required"),
  participant_work_preferences_desc: yup.string().required("Worker preference description is required"),
  referrer_name: yup.string().required("Referrer name is required"),
  referrer_org: yup.string().required("Referrer organization is required"),
  referrer_position: yup.string().required("Referrer position is required"),
  referrer_contact_number: yup
  .string()
  .required("Number is required")
  .min(10, "Contact number can only have 10 digits")
  .max(10, "Contact number can only have 10 digits"),
  referrer_email: yup
  .string()
  .required("Email is required")
  .email("Invalid email format"),
  referrer_remark: yup.string().required("Referrer remark is required"),
});

const useReferral = () => {
  const initialValues: FormikState = {
    name: "",
    participant_address: "",
    participant_email: "",
    participant_contact_number: "",
    participant_date_of_birth: "",
    participant_gender: "",
    participant_support_hours: "",
    participant_any_risk: "",
    participant_desc_support: "",

    invoicing_plan_funding: [],


    invoicing_particular_name: "",
    invoicing_particular_email: "",


    participant_living_situatuion: "",

    participant_current_behavioural_plan: "",


    participant_mobility_need_assistance: [],


    participant_mobility_independent: [],
    participant_mobility_desc: "",

    participant_comm_need_assitance: [],
    participant_comm_perfer: [],

    participant_comm_desc: "",
    
    participant_personal_care_need_assistance: [],
    participant_transfer_need_assistance: [],
    participant_eatinganddrinking_need_assistance: [],
    participant_continence_need_assistance: "",
    participant_continence_desc: "",
    participant_cald_background_need_assistance: "",
    participant_work_preferences_desc: "",
    referrer_name: "",
    referrer_org: "",
    referrer_position: "",
    referrer_contact_number: "",
    referrer_email: "",
    referrer_remark: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, helpers) => {

      helpers.setSubmitting(true)
      emailjs
        .send(
          "service_d2ek2yr",
          "",
          values,
          ""
        )
        .then((res) => {
          helpers.setSubmitting(false)
          if (res.text === "OK") {
            helpers.resetForm();
            toast.success("Your message has been sent", {
              position: "bottom-right",
            });
          }
        })
        .catch((err) => {
          helpers.setSubmitting(false)
          console.log(err);

          toast.error("Something went wrong please try again.", {
            position: "bottom-right",
          });
        });
    },
  });

  return { formik };
};

export default useReferral;
