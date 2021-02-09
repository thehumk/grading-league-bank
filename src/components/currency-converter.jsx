import {withCurrencyConverter} from '../hocs/with-currency-converter';

const CurrencyConverter = (props) => {
  const {children, submitHandler, typeChangeHandler, valueChangeHandler} = props;
  const {currencyInput, currencyOutput} = props.state;

  return (
    <section className="currency-converter">
      <h2 className="currency-converter__title">Конвертер валют</h2>
      <form method="post" action="#" className="currency-converter__container" onSubmit={submitHandler}>
        <div className="currency-converter__field">
          <label htmlFor="currency-input">
            <h3 className="currency-converter__field-title">У меня есть</h3>
          </label>
          <input id="currency-input" className="currency-converter__input" type="number" name="currencyInput" placeholder="0" value={currencyInput.amount} onChange={valueChangeHandler} />
          <label className="currency-converter__select-wrapper">
            <span></span>
            <select name="currencyInput" value={currencyInput.type} className="currency-converter__select" onChange={typeChangeHandler}>
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
            </select>
          </label>
        </div>
        <div className="currency-converter__field">
          <label htmlFor="currency-output">
            <h3 className="currency-converter__field-title">Хочу приобрести</h3>
          </label>
          <input id="currency-output" className="currency-converter__input" type="number" name="currencyOutput" placeholder="0" value={currencyOutput.amount} onChange={valueChangeHandler}/>
          <label className="currency-converter__select-wrapper">
            <span></span>
            <select name="currencyOutput" value={currencyOutput.type} className="currency-converter__select" onChange={typeChangeHandler}>
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
            </select>
          </label>
        </div>
        <div id="calendar">{children}</div>
        <button type="submit" className="currency-converter__save-button">Сохранить результат</button>
      </form>
    </section>
  );
}

export default withCurrencyConverter(CurrencyConverter);
