import "./list.css";
import { useState } from "react";
import Transaction from "../Transaction";
import CustomButton from "../CustomButton";

const TransactionList = ({
  transactionsLog: { transactions, setTransactions },
  convertToBRL,
}) => {
  const [filters, setFilters] = useState(["Todos", "Entradas", "Despesas"]);

  return (
    <>
      <nav className="filters-container">
        <h3>Resummo Financeiro</h3>
        <ul className="filters-container__list">
          {filters.map((filter) => (
            <li key={filter}>
              <CustomButton className="filter-button">{filter}</CustomButton>
            </li>
          ))}
        </ul>
      </nav>
      <div className="transactions-container">
        <ul className="transactions-list">
          {transactions.map((currentTransaction, i) => (
            <Transaction key={i}>
              {{
                transactions,
                currentTransaction,
                setTransactions,
                convertToBRL,
              }}
            </Transaction>
          ))}
          {/* <Transaction /> */}
          {/* {[...Array(5)].map((_, i) => (
            <li key={i} className="card-empty">
              {
                <img
                  src="./emptyCard.png"
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
