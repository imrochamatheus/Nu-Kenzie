import "./main.css";
import Form from "../Form";
import Section from "../Section";
import TotalMoney from "../TotalMoney";
import TransactionList from "../TransactionsList";

const Main = () => {
  return (
    <Section className="main-container">
      <Section className="section-container">
        <Form />
        <TotalMoney />
      </Section>
      <Section className="section-container">
        <TransactionList />
      </Section>
    </Section>
  );
};

export default Main;
