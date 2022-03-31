import "./transaction.css";

const Transaction = ({
  title = "TITULO",
  amount = "199.00",
  type = "Entrada",
}) => {
  return (
    <li className="transaction recipe">
      <h3 className="transaction-description">{title}</h3>
      <p className="transaction-amout">{amount}</p>
      <button className="transaction-btn__delete"></button>
      <p className="transaction-type">
        <small>{type}</small>
      </p>
    </li>
  );
};

export default Transaction;
