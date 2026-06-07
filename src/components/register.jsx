import "./register.css";
export function Register() {
  return (
    <div className="register-container">
      <h2>Create Account</h2>

      <form className="register-form">
        <label>User Id</label>
        <input type="text" placeholder="Enter User Id" />

        <label>User Name</label>
        <input type="text" placeholder="Enter User Name" />

        <label>Email</label>
        <input type="email" placeholder="Enter Email" />

        <label>Password</label>
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}