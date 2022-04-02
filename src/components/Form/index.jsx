import "./form.css";

const Form = ({ transactionsLog: { transactions, setTransactions } }) => {
  const addTransaction = (event) => {
    event.preventDefault();

    const transactionData = Object.fromEntries(
      new FormData(event.target).entries()
    );

    const id = Date.now() + Math.round(Math.random() * 1000);

    setTransactions([...transactions, { ...transactionData, id }]);

    event.target.reset();
  };

  return (
    <form className="form" onSubmit={addTransaction}>
      <div className="form-control form-description">
        <label htmlFor="description">Descrição:</label>
        <input type="text" name="description" required />
        <small>Ex: Compra de roupas</small>
      </div>
      <div className="form-control form-amount">
        <label htmlFor="amount">Valor:</label>
        <input type="number" step={0.01} name="value" required />
      </div>
      <div className="form-control form-type">
        <label htmlFor="type">Tipo de valor:</label>
        <select name="type">
          <option value="recipe">Entrada</option>
          <option value="expense">Saída</option>
        </select>
      </div>
      <input type="submit" value="Inserir Valor" required />
    </form>
  );
};

export default Form;
