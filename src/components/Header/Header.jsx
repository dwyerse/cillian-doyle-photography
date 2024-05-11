import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2>
        <a href="#">Cillian Doyle Photography</a>
      </h2>
      <div className="navigation">
        <a href="#about">About</a>
        <span>&#183;</span>
        <a href="#">Photo</a>
        <span>&#183;</span>
        <a href="#film">Film</a>
        <span>&#183;</span>
        <a href="#bookings">Bookings</a>
      </div>
    </div>
  );
}

export default Header;
