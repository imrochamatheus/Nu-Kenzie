import "./list.css";
import { useState } from "react";
import Transaction from "../Transaction";
import CustomButton from "../CustomButton";

const TransactionList = ({
  transactionsLog: { transactions, setTransactions },
  convertToBRL,
}) => {
  const filters = ["Todos", "Entradas", "Despesas"];
  const [currentFilter, setCurrentFilter] = useState("Todos");

  const changeFilter = ({ target }) => setCurrentFilter(target.value);
  const filterTransactions = () =>
    transactions.filter(({ type }) => type === currentFilter);

  const doesTheFilterExist = {
    Entradas: "recipe",
    Despesas: "expenses",
  }[currentFilter];

  console.log(transactions);

  return (
    <>
      <nav className="filters-container">
        <h3>Resummo Financeiro</h3>
        <ul className="filters-container__list">
          {filters.map((filter) => (
            <li key={filter}>
              <CustomButton
                className="filter-button"
                value={filter}
                onClick={changeFilter}
              >
                {filter}
              </CustomButton>
            </li>
          ))}
        </ul>
      </nav>
      <div className="transactions-container">
        <ul className="transactions-list">
          {doesTheFilterExist
            ? filterTransactions()
            : transactions.map((currentTransaction, i) => {
                console.log(currentTransaction.type);
                return (
                  <Transaction key={i}>
                    {{
                      transactions,
                      currentTransaction,
                      setTransactions,
                      convertToBRL,
                    }}
                  </Transaction>
                );
              })}
          {/* {transactions.map((currentTransaction, i) => {
            return (
              <Transaction key={i}>
                {{
                  transactions,
                  currentTransaction,
                  setTransactions,
                  convertToBRL,
                }}
              </Transaction>
            );
          })} */}
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
