import "./totalmoney.css";

const TotalMoney = ({ transactions, convertToBRL }) => {
  const calculateTotal = () => {
    const total = transactions.reduce((acc, { value, type }) => {
      return type === "recipe" ? acc + +value : acc - +value;
    }, 0);

    return total;
  };

  return transactions.length ? (
    <div className="total-money__container">
      <h3>Valor Total</h3>
      <h3 className="total-money__amount">{convertToBRL(calculateTotal())}</h3>
      <p>O valor se refere ao cálculo de entradas e saídas</p>
    </div>
  ) : (
    <></>
  );
};

export default TotalMoney;
