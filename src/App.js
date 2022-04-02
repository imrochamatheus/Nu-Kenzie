import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const switchPage = () => setLoggedIn(!loggedIn);

  const [transactions, setTransactions] = useState([]);

  const transactionsLog = { transactions, setTransactions };

  const convertToBRL = (value) =>
    value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  return (
    <>
      {!loggedIn ? (
        <LoginPage {...{ switchPage }} />
      ) : (
        <HomePage {...{ transactionsLog, switchPage, convertToBRL }} />
      )}
    </>
  );
}

export default App;
