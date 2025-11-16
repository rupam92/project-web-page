import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h2>Foodie Zone
        <br />
        <span className="tagline">Order your favourite food now!</span>
        </h2>
      </div>

      <div className="right">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/offer">Offers</a>
        <a href="/contact">Contact</a>
        <a href="/login" className="">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
