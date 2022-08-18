import React, { useState } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import ButtonGroup from '../../common/ButtonGroup';
import { GraphPeriod } from '../../enums/GraphPeriod.enum';
import DateUtil from '../../utils/DateUtil';
import GraphUtil from '../../utils/GraphUtil';
import { Container } from './ExpenseGraph.styles';

function ExpenseGraph() {
  const [period, setPeriod] = useState<GraphPeriod>(GraphPeriod.OneMonth);

  const handleButtonClick = (selectedPeriod: GraphPeriod) => {
    setPeriod(selectedPeriod);
  };

  const list = [
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
      key: '3',
      expense: 'Shopping',
      date: '04-16-2022',
      cost: 34.5,
      tags: ['shopping', 'outfit'],
    },
  ];
  const data = GraphUtil.getFormattedGraphData(period, list);

  return (
    <Container>
      <ButtonGroup
        buttons={[
          GraphPeriod.OneWeek,
          GraphPeriod.OneMonth,
          GraphPeriod.SixMonth,
          GraphPeriod.OneYear,
        ]}
        onButtonClick={handleButtonClick}
      />
      {data.length > 0 ? (
        <ResponsiveContainer width='100%' height={400}>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 15,
            }}
          >
            <XAxis
              height={60}
              dataKey='date'
              tickFormatter={(tickItem) => DateUtil.formatXAxis(tickItem)}
            />
            <YAxis dataKey='cost' />
            <Area dataKey='cost' stroke='#04c18e' fill='#f6f7fa' />
            <Tooltip payload={[{ name: '05-01', value: 12, unit: 'kg' }]} />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 2' />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div>No Data Available</div>
      )}
    </Container>
  );
}

export default ExpenseGraph;
