import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const userSchemaValidation = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is Rquired")
    .min(7, "Minimum 7 charactor is required"),
});

export default function Login() {
  const navigate = useNavigate();

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: userSchemaValidation,
      onSubmit: async (data) => {
        try {
          const response = await fetch("http://localhost:2500/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const result = await response.json();
          console.log(result)
          console.log(data)
          if (result.message === "User Login Successfully") {
            toast.success(result.message);
            sessionStorage.setItem('token',result.token)
            sessionStorage.setItem('id',result.id)
            navigate("/note");
          } else if (result.message === "Invaild Password") {
            toast.error("Invalid Password");
          } else {
            toast.error("user does't exist please check the email.");
          }
        } catch (error) {
          console.log(error);
        }
      },
    });
  return (
    <div>
      <div className="login-header">
        <i className="bx bxs-book-open bx-lg" style={{ color: "#FBBC04" }}></i>
        <span>
          <span className="logoFirstLetter">N</span>
          otify
        </span>
      </div>

      <div className="container ">
        <div className="row login-input align-items-center">
          <div className="col-md-6 ">
            <div className="text-center bold-1">
              <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <label for="exampleFormControlInput1" className="form-label bold">
                Email address
              </label>
              <input
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              ></input>
              {touched.email && errors.email ? (
                <p style={{ color: "crimson" }}>{errors.email}</p>
              ) : (
                ""
              )}
              <label for="inputPassword5" className="form-label bold pt-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                id="inputPassword5"
                className="form-control"
                placeholder="Password"
                aria-labelledby="passwordHelpBlock"
              ></input>
              {touched.password && errors.password ? (
                <p style={{ color: "crimson" }}>{errors.password}</p>
              ) : (
                ""
              )}
              <button className="btn btn-primary login-btn" type="submit">
                Login
              </button>
            </form>

            <hr></hr>
            <div className="d-flex justify-content-center align-items-end mb-0 pb-0">
              <p className="pe-2 mb-0">Don't have an account?</p>
              <a href="" className="text-primary text-decoration-none">
                Create one
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <p className="pe-2 mb-0">Having trouble logging in?</p>
              <a href="" className="text-primary text-decoration-none">
                Reset your password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
