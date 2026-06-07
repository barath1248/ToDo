import "../styles/register.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Register() {

  const [userMsg, setUserMsg] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userId: "",
      userName: "",
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      userId: yup
        .string()
        .required("User Id is required")
        .min(3, "User Id must be at least 3 characters")
        .max(20, "User Id cannot exceed 20 characters")
        .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscore are allowed"),
      userName: yup
        .string()
        .required("User Name is required")
        .min(2, "User Name must be at least 2 characters")
        .max(15, "User Name cannot exceed 15 characters")
        .matches(/^[a-zA-Z0-9 ]+$/, "Only letters, numbers and spaces are allowed"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password cannot exceed 20 characters")
        .required("Password is required")
        .matches(/[A-Z]/, "Must contain an uppercase letter")
        .matches(/[a-z]/, "Must contain a lowercase letter")
        .matches(/[0-9]/, "Must contain a number")
    }),
    onSubmit: (user) => {
      axios.get("http://localhost:3000/users")
        .then((response) => {

          const result = response.data.find(
            u => u.userId === user.userId
          );

          if (result) {
            alert("User Id already exists");
            return;
          }

          axios.post("http://localhost:3000/users", user)
            .then(() => {
              alert("Registered successfully");
              navigate("/login");
            });
        });
    }
  });
  function validateUserId(e) {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        var result = response.data.find(user => user.userId === e.target.value);
        if (result) {
          setUserMsg("User Id  exists.");
        } else {
          setUserMsg("user ID available!");
        }
      })
  }

  return (
    <div className="register-container">
      <h2>Create Account</h2>

      <form className="register-form" onSubmit={formik.handleSubmit}>
        <label>User Id</label>
        <input type="text" name="userId" onKeyUp={validateUserId} onChange={formik.handleChange} placeholder="Enter User Id" />
        <span style={{ color: "red" }}> {formik.errors.userId}</span>

        <label>User Name</label>
        <input type="text" name="userName" onChange={formik.handleChange} placeholder="Enter User Name" />
        <span style={{ color: "red" }}> {formik.errors.userName}</span>

        <label>Email</label>
        <input type="email" name="email" onChange={formik.handleChange} placeholder="Enter Email" />
        <span style={{ color: "red" }}> {formik.errors.email}</span>
        <label>Password</label>
        <input type="password" name="password" onChange={formik.handleChange} placeholder="Enter Password" />
        <span style={{ color: "red" }}> {formik.errors.password}</span>

        <button type="submit">Register</button>
        <p className="message">{userMsg}</p>
      </form>
    </div>
  );
}