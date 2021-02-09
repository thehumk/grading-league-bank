import {connect} from 'react-redux';
import {ActionCreator} from '../store/actions';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {loadExchangeRate} from '../store/api-actions';

import '../../node_modules/react-datepicker/dist/react-datepicker.css';

const FLOAT_COEFFICIENT = 10000;

const CustomCalendarInput = ({value, onClick}) => (
  <button className="currency-converter__calendar" type="button" onClick={onClick}>
    {value}
  </button>
);

export const withCurrencyConverter = (Component) => {
  class WithCurrencyConverter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        exchangeRate: props.exchangeRate,
        currencyInput: {
          type: `RUB`,
          amount: ``,
        },
        currencyOutput: {
          type: `USD`,
          amount: ``,
        },
      }

      this.submitHandler = this.submitHandler.bind(this);
      this.typeChangeHandler = this.typeChangeHandler.bind(this);
      this.valueConversion = this.valueConversion.bind(this);
      this.USDconversion = this.USDconversion.bind(this);
      this.conversionToUSD = this.conversionToUSD.bind(this);
      this.valueChangeHandler = this.valueChangeHandler.bind(this);
      this.dateChangeHandler = this.dateChangeHandler.bind(this);
      this.exchangeRateUpdate = this.exchangeRateUpdate.bind(this);
    }

    submitHandler(evt) {
      evt.preventDefault();
      this.props.addTransaction({
        date: moment(this.props.date).format(`DD.MM.YYYY`),
        currencyInput: this.state.currencyInput,
        currencyOutput: this.state.currencyOutput,
      });
    }

    typeChangeHandler(evt) {
      const {name, value} = evt.target;

      if (value === this.state.currencyInput.type || value === this.state.currencyOutput.type) {
        const type = this.state.currencyInput.type;
        const amount = this.state.currencyInput.amount;

        this.setState({
          currencyInput: {
            type: this.state.currencyOutput.type,
            amount: this.state.currencyOutput.amount,
          },
          currencyOutput: {
            type: type,
            amount: amount,
          },
        });
        return;
      };

      this.setState({[name]: Object.assign(
        {},
        this.state[name],
        {type: value}
      )},
        () => {
          this.valueConversion(`currencyInput`, this.state[`currencyInput`].amount);
        }
      );
    }

    USDconversion(name, value) {
      return Math.floor((value * this.state.exchangeRate[this.state[name].type]) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
    }

    conversionToUSD(name, value) {
      return Math.floor((value / this.state.exchangeRate[this.state[name].type]) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
    }

    valueConversion(name, value) {
      if (name === `currencyInput`) {
        this.entryField = `currencyInput`;
        this.outputField = 'currencyOutput';
      } else {
        this.entryField = `currencyOutput`;
        this.outputField = 'currencyInput';
      }

      if (this.state[this.entryField].type === `USD`) {
        this.setState({[this.outputField]: Object.assign(
          {},
          this.state[this.outputField],
          {amount: this.USDconversion(this.outputField, value)}
        )});
        return;
      } else if (this.state[this.outputField].type === `USD`) {
        this.setState({[this.outputField]: Object.assign(
          {},
          this.state[this.outputField],
          {amount: this.conversionToUSD(this.entryField, value)}
        )});
        return;
      }

      const intermediate = this.conversionToUSD(this.entryField, value);
      const result = this.USDconversion(this.outputField, intermediate);

      this.setState({[this.outputField]: Object.assign(
        {},
        this.state[this.outputField],
        {amount: result}
      )});
    }

    valueChangeHandler(evt) {
      const {name, value} = evt.target;

      this.setState({[name]: Object.assign(
        {},
        this.state[name],
        {amount: Math.floor(value * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT}
      )});

      this.valueConversion(name, value);
    }

    exchangeRateUpdate(date) {
      this.setState({exchangeRate: this.props.exchangeRate}, () => {
        this.props.loadExchangeRate(date, this.valueConversion(`currencyInput`, this.state[`currencyInput`].amount));
      })
    }

    dateChangeHandler(date) {
      const formatDate = moment(date).format(`YYYY-MM-DD`);
      this.props.changeDate(formatDate);
      this.props.loadExchangeRate(formatDate, () => {
        this.exchangeRateUpdate(formatDate);
      });
    }

    render() {
      const state = this.state;

      return (
        <Component
          {...this.props}
          state={state}
          submitHandler={this.submitHandler}
          typeChangeHandler={this.typeChangeHandler}
          valueChangeHandler={this.valueChangeHandler}>
          <DatePicker
            selected={new Date(this.props.date)}
            minDate={new Date(moment().subtract(1, `week`))}
            maxDate={new Date()}
            onChange={date => this.dateChangeHandler(date)}
            dateFormat={`d.MM.yyyy`}
            customInput={<CustomCalendarInput/>}
          />
        </Component>
      );
    }
  }

  const mapStateToProps = ({converter}) => ({
    date: converter.date,
    exchangeRate: converter.exchangeRate,
  });

  const mapDispatchToProps = (dispatch) => ({
    addTransaction(transaction) {
      dispatch(ActionCreator.addTransaction(transaction));
    },

    changeDate(date) {
      dispatch(ActionCreator.changeDate(date));
    },

    loadExchangeRate(date, callback) {
      dispatch(loadExchangeRate(date, callback));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithCurrencyConverter);
}
