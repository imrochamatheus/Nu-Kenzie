import "./App.css";
import { useState } from "react";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const switchPage = () => setLoggedIn(!loggedIn);

  const [transactions, setTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const transactionsLog = { transactions, setTransactions };

  return (
    <>
      {!loggedIn ? (
        <LoginPage {...{ switchPage }} />
      ) : (
        <HomePage {...transactionsLog} />
      )}
    </>
  );
}

export default App;
