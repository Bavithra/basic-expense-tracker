import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import ExpenseHistory from './components/ExpenseHistory';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <ExpenseHistory />
  </Provider>
);

export default App;
