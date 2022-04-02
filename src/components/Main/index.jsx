import "./main.css";
import Form from "../Form";
import Section from "../Section";
import TotalMoney from "../TotalMoney";
import TransactionList from "../TransactionsList";

const Main = ({ transactionsLog, convertToBRL }) => {
  return (
    <Section className="main-container">
      <Section className="section-container">
        <Form transactionsLog={transactionsLog} />
        <TotalMoney
          transactions={transactionsLog.transactions}
          convertToBRL={convertToBRL}
        />
      </Section>
      <Section className="section-container">
        <TransactionList {...{ transactionsLog, convertToBRL }} />
      </Section>
    </Section>
  );
};

export default Main;
