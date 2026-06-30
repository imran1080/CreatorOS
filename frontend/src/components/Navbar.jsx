function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">CreatorOS</div>

          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <button className="login-btn">
            Login
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar