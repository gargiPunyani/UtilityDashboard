import * as yup from "yup"

export const loginSchema = yup.object({
    email:yup.string().email().matches(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/,
         "Invalid Email" )
         .required("Required"),

    password: yup.string().min(8)
    .max(12)
    .matches(
        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
        "Must Contain 4 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
    .required("Required")
})

export const bankAccountSchema = yup.object({
  bName: yup.string().required("Field is required"),
  accountNo: yup.string().min(10).required("Field is required"),
  hName: yup.string().min(3).required("Field is required"),
  ifsc: yup.string().required("Field is required"),
  branch: yup.string().required("Field is required")
})