import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseList: [
    {
      key: '1',
      expense: 'Groceries',
      date: '08-02-2022',
      cost: 58.8,
      tags: ['essential', 'food'],
    },
    {
      key: '2',
      expense: 'Electric Bill',
      date: '08-03-2022',
      cost: 230,
      tags: ['bill'],
    },
    {
      key: '3',
      expense: 'Shopping',
      date: '08-16-2022',
      cost: 345.5,
      tags: ['shopping', 'outfit'],
    },
    {
      key: '4',
      expense: 'Shopping',
      date: '04-16-2022',
      cost: 34.5,
      tags: ['shopping'],
    },
  ],
};

export const slice = createSlice({
  name: 'expense',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // adds expense(s) to the existing expense list
    addExpense: (state, param) => {
      const { payload } = param;
      state.expenseList.push(payload);
    },
    deleteExpense: (state, param) => {
      const { payload } = param;
      state.expenseList.splice(payload, 1);
    },
  },
});

export const { addExpense, deleteExpense } = slice.actions;

export default slice.reducer;
