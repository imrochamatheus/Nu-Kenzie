import "./home.css";
import Main from "../Main";
import Header from "../Header";

const HomePage = ({ transactionsLog, switchPage, convertToBRL }) => {
  return (
    <>
      <Header switchPage={switchPage} />
      <Main transactionsLog={transactionsLog} convertToBRL={convertToBRL} />
    </>
  );
};

export default HomePage;
