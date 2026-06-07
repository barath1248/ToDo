import "../styles/login.css";

export function Login() {
  
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>

      <form className="login-form">
        <label>User Id</label>
        <input
          type="text"
          placeholder="Enter User Id"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
        />

        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}