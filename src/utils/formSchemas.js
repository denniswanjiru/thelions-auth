import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must contain atleaset 6 characters")
    .required("Password is required")
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .required("Name is required."),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must contain atleaset 6 characters")
    .required("Password is required")
});

export const PersonalInfoSchema = Yup.object().shape({
  phone: Yup.string()
    .min(10, "Phone number is too short")
    .required("Phone number is required."),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required."),
  linkedin: Yup.string(),
  salary: Yup.number()
    .required("Minimum salary is required")
});
