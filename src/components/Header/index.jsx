import "./header.css";
import Section from "../Section";
import CustomButton from "../CustomButton";

const Header = ({ switchPage }) => {
  return (
    <nav className="navbar">
      <Section className="navbar-itens">
        <img className="logo" src="./logo.svg" alt="Nu Kenzie logo" />
        <CustomButton className="btn-login" onClick={switchPage}>
          Inicio
        </CustomButton>
      </Section>
    </nav>
  );
};

export default Header;
