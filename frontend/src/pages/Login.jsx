import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcome Back 👋</h1>

        <p>Sign in to your CreatorOS account</p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p className="register-link">
  Don't have an account? <Link to="/register">Create one</Link>
</p>
      </div>
    </div>
  );
}

export default Login;