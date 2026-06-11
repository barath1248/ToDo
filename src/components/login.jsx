import {  useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../styles/login.css";

export function Login() {
   const [, setCookie,] = useCookies(['userid']);


  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userId: "",
      password: ""
    },
    onSubmit: (user) => {
      axios.get("http://localhost:3000/users")
        .then((response) => {
          var result = response.data.find(u => u.userId === user.userId);
          if (result) {
            if (result.password === user.password) {
              setCookie("userId", user.userId);
              navigate('/dashboard');
            } else {
              alert('Invalid Password');
            }
          } else {
            alert('Invalid UserId');
          }
        })
    }

  })
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>

      <form onSubmit={formik.handleSubmit} className="login-form">
        <label>User Id</label>
        <input
          type="text"
          name="userId"
          onChange={formik.handleChange}
          placeholder="Enter User Id"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          placeholder="Enter Password"
        />

        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}