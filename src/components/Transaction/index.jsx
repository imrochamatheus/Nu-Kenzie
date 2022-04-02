import "./transaction.css";

const Transaction = ({
  children: {
    transactions,
    setTransactions,
    convertToBRL,
    currentTransaction: { description, value, id, type: tipo },
  },
}) => {
  const removeTransaction = (event) => {
    const idToBeRemoved = event.target.dataset.delete;

    const filteredTransactions = transactions.filter(
      (transaction) => +transaction.id !== +idToBeRemoved
    );

    setTransactions(filteredTransactions);
  };

  return (
    <li
      className={`transaction ${
        tipo.toLowerCase() === "expense" ? "expense" : "recipe"
      }`}
    >
      <h3 className="transaction-description">{description}</h3>
      <p className="transaction-amout">{convertToBRL(+value)}</p>
      <button
        className="transaction-btn__delete"
        data-delete={id}
        onClick={removeTransaction}
      ></button>
      <p className="transaction-type">
        <small>{tipo === "expense" ? "Saída" : "Entrada"}</small>
      </p>
    </li>
  );
};

export default Transaction;
