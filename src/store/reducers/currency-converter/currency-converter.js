import {extend} from '../../../utils';
import {ActionType} from '../../actions';
import moment from 'moment';

const InitialState = {
  date: moment().format(`YYYY-MM-DD`),
  exchangeRate: ``,
};

export const currencyConverter = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_DATE:
      return extend(state, {
        date: action.payload,
      });
    case ActionType.LOAD_EXCHANGE_RATE:
      return extend(state, {
        exchangeRate: action.payload,
      });
  }
  
  return state;
};
