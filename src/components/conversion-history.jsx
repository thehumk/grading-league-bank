import {connect} from 'react-redux';
import {ActionCreator} from '../store/actions';

const ConversionHistory = ({history, clearHistory}) => {

  return (
    <section className="conversion-history">
      <h2 className="conversion-history__title">История конвертации</h2>
      <ul className="conversion-history__list">
        {history.map((elem, i) => (
          <li key={i} className="conversion-history__item">
            <p className="conversion-history__date">{elem.date}</p>
            <div className="conversion-history__currency-container">
              <p className="conversion-history__before">{elem.currencyInput.amount} {elem.currencyInput.type}</p>
              <p className="conversion-history__after">{elem.currencyOutput.amount} {elem.currencyOutput.type}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="conversion-history__clear-button" onClick={clearHistory}>Очистить историю</button>
    </section>
  );
}

const mapStateToProps = ({history}) => ({
  history: history.history,
});

const mapDispatchToProps = (dispatch) => ({
  clearHistory() {
    dispatch(ActionCreator.clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
