import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Create Account 🚀</h1>

        <p>Join CreatorOS and start creating smarter.</p>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Create Account
          </button>
        </form>

        <p className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;