import {ActionCreator} from './actions';

const ID = `ec5a15999abb47119e9965a5d8373947`;

const BASE_RATE = 1;

export const loadExchangeRate = (date, callback = () => {}) => (dispatch, _getState, api) => (
  api.get(`historical/${date}.json?app_id=${ID}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadExchangeRate({
        USD: BASE_RATE,
        RUB: data.rates.RUB,
        EUR: data.rates.EUR,
        GBP: data.rates.GBP,
        CNY: data.rates.CNY,
      }))
    })
    .then(() => {
      callback()
    })
);
