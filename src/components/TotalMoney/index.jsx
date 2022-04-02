import "./totalmoney.css";

const TotalMoney = ({ transactions, convertToBRL }) => {
  const filterInputValues = ({ type }) => type === "recipe";

  return transactions.length ? (
    <div className="total-money__container">
      <h3>Valor Total</h3>
      <h3 className="total-money__amount">
        {convertToBRL(
          transactions
            .filter(filterInputValues)
            .reduce((acc, { value }) => acc + +value, 0)
        )}
      </h3>
      <p>O valor se refere às entradas</p>
    </div>
  ) : (
    <></>
  );
};

export default TotalMoney;
