import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import ExpenseViewPage from './pages/ExpenseViewPage';

const App = () => (
  <Provider store={store}>
    <ExpenseViewPage />
  </Provider>
);

export default App;
