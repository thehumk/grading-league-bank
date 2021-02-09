import ReactDOM from 'react-dom';
import './sass/style.scss';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/root-reducer';
import {createAPI} from './services/api';
import App from './App';
import {loadExchangeRate} from './store/api-actions';

const api = createAPI();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

Promise.all([
  store.dispatch(loadExchangeRate(store.getState().converter.date)),
])
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
});
