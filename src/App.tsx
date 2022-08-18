import React from 'react';
import './App.css';
import { Space, Table, Tag } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Date',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Expense',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Cost',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Type',
    key: 'tags',
    dataIndex: 'tags',
    render: (_: any, { tags }: any) => (
      <>
        {tags.map((tag: string) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

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
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App = () => <Table columns={columns} dataSource={data} />;

export default App;
