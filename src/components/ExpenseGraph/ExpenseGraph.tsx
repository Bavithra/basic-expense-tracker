import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { RootState } from '../../redux/store';
import DateUtil from '../../utils/DateUtil';
import GraphUtil from '../../utils/GraphUtil';
import { Container } from './ExpenseGraph.styles';

function ExpenseGraph() {
  const [period, setPeriod] = useState<GraphPeriod>(GraphPeriod.OneMonth);

  const handleButtonClick = (selectedPeriod: GraphPeriod) => {
    setPeriod(selectedPeriod);
  };

  const list = useSelector(
    (state: RootState) => state.reducer.data.expenseList
  );
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

{list.length > 0 && <h2>{`Total Expense: ${list
        .map((item) => item.cost)
        .reduce((prev, next) => prev + next)}`}</h2>}
      {data.length > 0 && <h2>{`Total Expense for the selected period : ${data
        .map((item) => item.cost)
        .reduce((prev, next) => prev + next)}`}</h2>}

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
            <Tooltip
              content={(props) => (
                <div
                  style={{
                    border: '#bbb 1.5px solid',
                  }}
                >
                  <p
                    style={{
                      margin: '0 0',
                      padding: '3px 7.5px',
                      backgroundColor: 'white',
                    }}
                  >
                    {props.payload &&
                      props.payload[0] != null &&
                      props.payload[0].payload.expense}
                  </p>
                  <p
                    style={{
                      margin: '0 0',
                      padding: '3px 7.5px',
                      backgroundColor: 'white',
                    }}
                  >
                    {props.payload &&
                      props.payload[0] != null &&
                      props.payload[0].payload.date}
                  </p>
                  <p
                    style={{
                      margin: '0 0',
                      padding: '3px 7.5px',
                      backgroundColor: 'white',
                      color: '#007AFF',
                    }}
                  >
                    Cost:{' '}
                    {props.payload &&
                      props.payload[0] != null &&
                      props.payload[0].payload.cost}
                  </p>
                </div>
              )}
            />
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
