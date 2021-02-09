export const ActionType = {
  ADD_TRANSACTION: `addTransaction`,
  CLEAR_HISTORY: `clearHistory`,
  CHANGE_DATE: `changeDate`,
  LOAD_EXCHANGE_RATE: `loadExchangeRate`,
};

export const ActionCreator = {
  addTransaction: (transaction) => ({
    type: ActionType.ADD_TRANSACTION,
    payload: transaction,
  }),

  clearHistory: () => ({
    type: ActionType.CLEAR_HISTORY,
    payload: [],
  }),

  changeDate: (date) => ({
    type: ActionType.CHANGE_DATE,
    payload: (date),
  }),

  loadExchangeRate: (exchangeRate) => ({
    type: ActionType.LOAD_EXCHANGE_RATE,
    payload: exchangeRate,
  }),
};
