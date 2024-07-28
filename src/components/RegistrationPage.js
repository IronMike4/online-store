import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthForms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  // State variables to manage registration status and password visibility
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Validation schema for registration form using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required Field")
      .test(
        "no-white-spaces",
        "First name cannot be only spaces",
        (value) => value && value.trim() !== ""
      ),
    surname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required Field")
      .test(
        "no-white-spaces",
        "Surname cannot be only spaces",
        (value) => value && value.trim() !== ""
      ),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
      .required("Required Field"),
    password: Yup.string()
      /*
        Password must be at least 8 characters, contain at least one lowercase letter, 
        one uppercase letter, one number, one special character, and have no leading or trailing whitespace
      */
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character"
      )
      .matches(/^\S*$/, "No leading or trailing whitespace allowed")
      .required("Required Field"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .matches(/^\S*$/, "No leading or trailing whitespace allowed")
      .required("Required Field"),
  });

  // Handle form submission: logs values, sets registration status, and stops submission state after a delay
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Registration:", values);
    setTimeout(() => {
      setIsRegistered(true);
      setSubmitting(false);
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after displaying the success message
      }, 2000); // Wait for 2 seconds before redirecting
    }, 500);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      {isRegistered ? (
        // Display success message if registered
        <div className="alert alert-success text-center" role="alert">
          Registration successful! Redirecting to login...
        </div>
      ) : (
        <Formik
          initialValues={{
            firstName: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="auth-form">
              {/* First Name Field */}
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  onBlur={(e) => {
                    setFieldValue("firstName", e.target.value.trim()); // Remove leading/trailing whitespace
                  }}
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Surname Field */}
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  Surname
                </label>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  className="form-control"
                  onBlur={(e) => {
                    setFieldValue("surname", e.target.value.trim()); // Remove leading/trailing whitespace
                  }}
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Email Field */}
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
                    setFieldValue("email", e.target.value.trim()); // Remove leading/trailing whitespace
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Password Field */}
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <Field
                    type={showPassword ? "text" : "password"} // Toggle password visibility
                    id="password"
                    name="password"
                    className="form-control"
                    onBlur={(e) => {
                      setFieldValue("password", e.target.value.trim()); // Remove leading/trailing whitespace
                    }}
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility state
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />{" "}
                    {/* Toggle icon */}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-group">
                  <Field
                    type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    onBlur={(e) => {
                      setFieldValue("confirmPassword", e.target.value.trim()); // Remove leading/trailing whitespace
                    }}
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setShowConfirmPassword((prev) => !prev)} // Toggle confirm password visibility state
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                    />{" "}
                    {/* Toggle icon */}
                  </span>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}{" "}
                {/* Button text based on submission state */}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default RegistrationPage;
