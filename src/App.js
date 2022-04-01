import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [transactions, setTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
