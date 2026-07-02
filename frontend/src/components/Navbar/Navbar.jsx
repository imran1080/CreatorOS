import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <h2 className="logo">🚀 CreatorOS</h2>

        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;