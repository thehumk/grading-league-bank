import {combineReducers} from 'redux';
import {currencyConverter} from './currency-converter/currency-converter';
import {conversionHistory} from './conversion-history/conversion-history';

export default combineReducers({
  converter: currencyConverter,
  history: conversionHistory,
});
