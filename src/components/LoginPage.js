import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthForms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Validation schema for login form using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
      .required("Required Field"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .test(
        "no-leading-whitespace",
        "Password cannot have leading whitespaces",
        (value) => value && value[0] !== " "
      )
      .required("Required Field"),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login:", values);
    setTimeout(() => {
      setIsLoggedIn(true);
      setSubmitting(false);
      setTimeout(() => {
        navigate("/products"); // Redirect to products page after 2 seconds
      }, 2000); // Wait for 2 seconds before redirecting
    }, 500); // Simulate login delay
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Login</h1>
      {isLoggedIn ? (
        <div className="alert alert-success text-center" role="alert">
          Login successful! Redirecting to products...
        </div> /* Display success message if logged in */
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="auth-form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  onBlur={(e) => {
                    setFieldValue("email", e.target.value.trim());
                  }} /* Remove leading/trailing spaces on blur */
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
                {/* Display email validation errors */}
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setShowPassword((prev) => !prev)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
                {/* Display password validation errors */}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              {/* Submit button */}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default LoginPage;
