import * as yup from "yup";

export const loginSchema = yup.object({
  mobile: yup.string().min(10).max(10).required("Required"),
  password: yup.string().min(6).max(12).required("Required"),
});

export const bankAccountSchema = yup.object({
  bName: yup.string().required("Field is required"),
  accountNo: yup.string().min(10).required("Field is required"),
  hName: yup.string().min(3).required("Field is required"),
  ifsc: yup.string().required("Field is required"),
  branch: yup.string().required("Field is required"),
});
