import React from "react";
import { Space, Table, Tag } from 'antd';

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
    title: 'Cost',
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
        <a>Edit {record.expense}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    expense: 'Groceries',
    date: '02-02-2022',
    cost: 23.9,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    expense: 'Groceries',
    date: '02-02-2022',
    cost: 23,
    tags: ['nice', 'developer'],
  },
  {
    key: '3',
    expense: 'Groceries',
    date: '02-02-2022',
    cost: 23,
    tags: ['nice', 'developer'],
  },
];

function ExpenseHistory() {
  return <Table columns={columns} dataSource={data} />
}

export default ExpenseHistory;
