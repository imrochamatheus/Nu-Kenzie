import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TotalMoney from "./components/TotalMoney";
import TransactionList from "./components/TransactionsList";

function App() {
  const [transactions, setTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div className="container">
      <Header />
      <Form />
      <TotalMoney />
      <TransactionList />
    </div>
  );
}

export default App;
