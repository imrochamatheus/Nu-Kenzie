import "./header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="./logo.svg" alt="Nu Kenzie logo" />
      <button className="btn-return">Inicio</button>
    </nav>
  );
};

export default Header;
