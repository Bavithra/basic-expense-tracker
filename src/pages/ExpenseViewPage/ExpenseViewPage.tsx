import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ExpenseGraph from '../../components/ExpenseGraph';
import ExpenseHistory from '../../components/ExpenseHistory';
import { Colors } from '../../styles/Colors';
import { ButtonContainer } from './ExpenseViewPage.styles';

function ExpenseViewPage() {
  return (
    <>
      <ExpenseGraph />
      <ButtonContainer>
        <Button
          type='primary'
          color={Colors.green1}
          icon={<PlusOutlined />}
          size='large'
        >
          Add New Expense(s)
        </Button>
      </ButtonContainer>
      <ExpenseHistory />
    </>
  );
}

export default ExpenseViewPage;
