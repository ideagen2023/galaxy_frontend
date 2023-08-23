import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type FormikState = {
  name: string;
  email: string;
  number: string;
  question: string;
}; 

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  number: yup
    .string()
    .required("Number is required")
    .min(10, "Contact number can only have 10 digits")
    .max(10, "Contact number can only have 10 digits"),
  question: yup.string().required("Please type a question for us"),
});

const useEmailContact = () => {
  const initialValues: FormikState = {
    name: "",
    email: "",
    number: "",
    question: ""
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

export default useEmailContact;
