import React from "react";
import { Space, Table, Tag } from 'antd';
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Container } from "./ExpenseHistory.styles";

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
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function ExpenseHistory() {
  const data = useSelector(
    (state: RootState) => state.reducer.data.expenseList
  );

  return <Container><Table columns={columns} dataSource={data} /></Container>;
}

export default ExpenseHistory;
