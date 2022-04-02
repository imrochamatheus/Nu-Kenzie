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

  const dictionary = {
    Entradas: "recipe",
    Despesas: "expense",
  };

  const changeFilter = ({ target }) => setCurrentFilter(target.value);

  const filterTransactions = () => {
    const isAValidFilter = dictionary[currentFilter];

    return isAValidFilter
      ? transactions.filter(({ type }) => type === isAValidFilter)
      : transactions;
  };

  const transactionsToBeRendered = filterTransactions().map(
    (currentTransaction, i) => {
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
    }
  );

  const fakeTransactions = [
    <li>
      <h2 class="fake-transactions__title">
        Você ainda não tem nenhum lançamento
      </h2>
    </li>,
    ...[...Array(3)].map((_, i) => (
      <li key={i} className="card-empty">
        {<img src="./emptyCard.png" alt="Empty transaction card" />}
      </li>
    )),
  ];

  return (
    <>
      <nav className="filters-container">
        <h3>Resumo Financeiro</h3>
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
          {transactions.length ? transactionsToBeRendered : fakeTransactions}
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
