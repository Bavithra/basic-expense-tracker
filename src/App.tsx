import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import ExpenseHistory from './components/ExpenseHistory';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ExpenseGraph from './components/ExpenseGraph';

const App = () => (
  <Provider store={store}>
    <ExpenseGraph />
    <ExpenseHistory />
  </Provider>
);

export default App;
