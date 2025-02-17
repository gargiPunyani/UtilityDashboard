import * as yup from "yup";

export const numberSchema = yup.object({
  mobile: yup.string().min(10).max(10).required("Mobile Number is Required"),
});
export const addSenderSchema = yup.object({
    fName: yup.string().min(3).required("First Name is Required"),
    lName: yup.string().min(3).required("Last Name is Required"),
    pincode: yup.string().length(6).required("Pincode is required"),
    address: yup.string().min(3).required("Address is Required"),
    state: yup.string().min(3).required("State is Required"),
    otp:yup.string().required("OTP is required")    
})
