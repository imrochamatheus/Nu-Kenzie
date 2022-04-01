import "./login.css";
import Section from "../Section";
import CustomButton from "../CustomButton";

const LoginPage = ({ switchPage }) => {
  return (
    <Section className="login-page__content">
      <Section className="login-page__main-container">
        <img className="logo" src="./login-logo.svg" alt="Nu Kenzie logo" />
        <div className="login-page__title">
          <h1>Centralize o controle das suas finanças</h1>
        </div>
        <div className="login-page__subtitle">
          <p>de forma rápida e segura</p>
        </div>
        <CustomButton className="btn-login" onClick={switchPage}>
          Iniciar
        </CustomButton>
      </Section>
      <Section className="login-page__circle-container">
        <div className="login-page__circle"></div>
      </Section>
    </Section>
  );
};

export default LoginPage;
