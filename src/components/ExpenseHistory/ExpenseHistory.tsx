import React from "react";
import { Space, Table, Tag } from 'antd';
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from '../../redux/slice';

import { Container } from "./ExpenseHistory.styles";
import { Expense } from "../../types/Expense.type";


function ExpenseHistory() {
  const dispatch = useDispatch();

  const data = useSelector(
    (state: RootState) => state.reducer.data.expenseList
  );

  function handleEdit(record: Expense) {
    const index = data.findIndex(array => array.key === record.key)

    dispatch(deleteExpense(index));
  }
  
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Expense',
      dataIndex: 'expense',
      key: 'expense',
      render: (text: string) => <div>{text}</div>,
    },
    {
      title: 'Cost (SGD)',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: 'Type',
      key: 'tags',
      dataIndex: 'tags',
      render: (_: any, { tags }: any) => (
        <>
          {tags.map((tag: string) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Container><Table columns={columns} dataSource={data} /></Container>;
}

export default ExpenseHistory;
