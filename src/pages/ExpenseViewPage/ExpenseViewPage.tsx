import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ExpenseGraph from '../../components/ExpenseGraph';
import ExpenseHistory from '../../components/ExpenseHistory';
import { Colors } from '../../styles/Colors';
import { ButtonContainer } from './ExpenseViewPage.styles';
import AddExpenseModal from '../../components/AddExpenseModal';

function ExpenseViewPage() {
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);

  async function onAddNewExpenseClick() {
    setIsAddExpenseModalOpen(true);
  }

  return (
    <>
    <h1>Expense Tracker</h1>
      <ExpenseGraph />
      <ButtonContainer>
        <Button
          type='primary'
          color={Colors.green1}
          icon={<PlusOutlined />}
          size='large'
          onClick={onAddNewExpenseClick}
        >
          Add New Expense(s)
        </Button>
      </ButtonContainer>
      <ExpenseHistory />
      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        setIsAddExpenseModalOpen={setIsAddExpenseModalOpen}
      />
    </>
  );
}

export default ExpenseViewPage;
