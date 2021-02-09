import {extend} from '../../../utils';
import {ActionType} from '../../actions';
import mockHistory from '../../../mock-history';

const MAX_HISTORY_QUANTITY = 10

const InitialState = {
  history: mockHistory,
};

export const conversionHistory = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TRANSACTION:
      return extend(state, {
        history: [action.payload, ...state.history].slice(0, MAX_HISTORY_QUANTITY),
      });
    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        history: [],
      });
  }

  return state;
};
