import React, { useState } from "react";
import LoginLogo from "../../Assests/webwiseLogo.png"
import { useFormik } from "formik";
import { loginSchema } from "./Schema";
import { useNavigate, Link } from "react-router-dom";

const LoginLeft = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [showPass, setShowPass] = useState(true);
  const showPassword = () => {
    setShowPass(!showPass);
  };

  const navigate = useNavigate();
  const { values, handleBlur, handleChange, touched, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        // console.log(values.password)
        // console.log(errors)

        // alert("submitted")
        action.resetForm();

        navigate("/dashboard");
      },
    });
  return (
    <div className="loginLeftOuterMost text-xs sm:text-sm bg-white md:h-screen relative top-0 z-10 p-3">
      <div className="loginLeftOuter">
        <div className="loginLeftInner">
          <div className="loginLogo w-[55%] m-auto">
            <img src={LoginLogo} alt="loginLogo" />
          </div>
          <div className="loginAccountHead font-medium sm:font-semibold text-xs sm:text-sm text-center md:mb-10">
            <h3>Login into your Account</h3>
          </div>
        </div>
        <div className="loginData text-gray-600 p-3">
          <form className="loginData" onSubmit={handleSubmit}>
            <div className="loginEmailInfo  mb-2">
              <div className="loginEmail">
                <label htmlFor="loginEmail">Email Address :</label>
              </div>
              <div className="emailAddress cursor-pointer flex justify-between my-2 items-center border-2 border-gray-400 outline-none rounded-md p-3">
                <div className="loginEmail  w-[90%]">
                  <input
                    placeholder="Enter valid Email "
                    className="outline-none w-full"
                    value={values.email}
                    id="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="emailIcon bg-blue-600 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#fff"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                </div>
              </div>
              {errors.email && touched.email ? (
                <p className="text-red-600 text-xs"> {errors.email}</p>
              ) : null}
            </div>
            <div className="loginPasswordInfo  mt-3">
              <div className="loginPassword">
                <label htmlFor="loginPassword">Password:</label>
              </div>
              <div className="password cursor-pointer flex justify-between my-2 items-center border-2 border-gray-400 outline-none rounded-md p-3">
                <div className="loginPassword  w-[90%] ">
                  <input
                    placeholder="Enter valid Password"
                    className="outline-none w-full"
                    value={values.password}
                    id="password"
                    type={showPass ? "password" : "text"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div
                  className="lockIcon bg-blue-600 p-1 rounded-full"
                  onClick={showPassword}
                >
                  {showPass ?
                  (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                    </svg>
                  ):(
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  )
                   }
                </div>
              </div>
              {errors.password && touched.password ? (
                <p className="text-red-600 text-xs"> {errors.password}</p>
              ) : null}
            </div>
            <div className="forgotPass  text-blue-600 underline cursor-pointer mt-1 text-right">
              <p>
                {" "}
                <Link to={"/forgot-password"}>Forgot Password ? </Link>
              </p>
            </div>
            <button
              type="submit"
              className="loginButton loginBtn bg-blue-600 text-white text-center w-full p-2 mt-5 cursor-pointer outline-none rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;
