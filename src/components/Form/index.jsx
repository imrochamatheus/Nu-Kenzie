import "./form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="form-control form-description">
        <label htmlFor="description">Descrição:</label>
        <input type="text" name="description" />
        <small>Ex: Compra de roupas</small>
      </div>
      <div className="form-control form-amount">
        <label htmlFor="amount">Valor:</label>
        <input type="number" step={0.01} name="amount" />
      </div>
      <div className="form-control form-type">
        <label htmlFor="type">Tipo de valor:</label>
        <select name="type">
          <option value="recipe">Entrada</option>
          <option value="expense">Saída</option>
        </select>
      </div>
      <input type="submit" value="Inserir Valor" />
    </form>
  );
};

export default Form;
