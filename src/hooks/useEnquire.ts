import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type FormikState = {
  name: string;
  email:string;
  enq_address: string;
  enq_contact: string;
  enq_date: string;
  enq_support_hour: string;
  enq_support_description: string;
  enq_any_risk: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  enq_address: yup.string().required("Address is required"),
  enq_contact: yup
    .string()
    .required("Contact is required")
    .min(10, "Contact number can only have 10 digits")
    .max(10, "Contact number can only have 10 digits"),
  enq_date: yup.string().required("Date is required"),
  enq_support_hour: yup.string().required("Support hour is required"),
  enq_support_description: yup.string().required("Support description is required"),
  enq_any_risk: yup.string().required("Any risk is required"),
});

const useEnquire = () => {
  const initialValues: FormikState = {
      name: "",
      email:"",
      enq_address: "",
      enq_contact: "",
      enq_date: "",
      enq_support_hour: "",
      enq_support_description: "",
      enq_any_risk: ""
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

export default useEnquire;
