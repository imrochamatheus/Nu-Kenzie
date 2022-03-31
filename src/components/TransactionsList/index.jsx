import "./list.css";
import { useState } from "react";
import Transaction from "../Transaction";

const TransactionList = () => {
  const [filters, setFilters] = useState(["Todos", "Entradas", "Despesas"]);

  return (
    <>
      <nav>
        <h2>Resummo Financeiro</h2>
        <ul className="filters-list">
          {filters.map((filter) => (
            <li key={filter}>{filter}</li>
          ))}
        </ul>
      </nav>
      <div className="transactions-container">
        <ul className="transactions-list">
          <Transaction />
          {/* {[...Array(5)].map((_, i) => (
            <li key={i}>
              {
                <img
                  src="./emptyCard.png"
                  className="card-empty"
                  alt="Empty transaction card"
                />
              }
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
