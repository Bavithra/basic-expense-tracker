import { Button, Select } from 'antd';
import { format } from 'date-fns';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from '../../common/DatePicker';
import { addExpense } from '../../redux/slice';

import Modal from '../../common/Modal';
import TextInput from '../../common/TextInput';
import { Colors } from '../../styles/Colors';
import { InputContainer } from '../../styles/Common.styles';
import { Expense } from '../../types/Expense.type';
import {
  AddModalInfo,
  ButtonContainer,
  Container,
} from './AddExpenseModal.styles';

type Props = {
  isOpen: boolean;
  setIsAddExpenseModalOpen: (shouldShowModal: boolean) => void;
};

const initialInput = {
  key: '',
  expense: '',
  date: '',
  cost: 0,
  tags: [],
};

export default function AddExpenseModal(props: Props) {
  const { isOpen, setIsAddExpenseModalOpen } = props;

  const [expense, setExpense] = useState<Expense>(initialInput);
  const expenseTags = ['Food', 'Shopping', 'Essential', 'Outfit', 'Bill', 'Travel', 'Gas'];

  const dispatch = useDispatch();

  const dropdown = [];
  const isSubmitButtonDisabled =
    expense.cost > 0 &&
    expense.expense.length > 0 &&
    expense.date?.length > 0 &&
    expense.tags.length > 0;

  for (let i = 0; i < expenseTags.length; i++) {
    dropdown.push(<Select.Option key={expenseTags[i]}>{expenseTags[i]}</Select.Option>);
  }

  function onCancelClick() {
    setIsAddExpenseModalOpen(false);
  }

  const handleDropdownChange = (value: any) => {
    updateExpense('tags', value);
  };

  const generateKey = () => {
    return `${expense.expense}_${new Date().getTime()}`;
  };

  function handleSubmit() {
    dispatch(addExpense({ ...expense, key: generateKey() }));
    setExpense(initialInput);
    setIsAddExpenseModalOpen(false);
  }

  function update(
    previousInputs: Expense,
    inputKey: string,
    value: string | number | string[]
  ): Expense {
    return {
      ...previousInputs,
      [inputKey]: value,
    };
  }

  const updateExpense = useCallback(
    (inputKey: keyof Expense, value: string | number | string[]) => {
      setExpense((previousInputs) => update(previousInputs, inputKey, value));
    },
    [expense]
  );

  return (
    <Modal isOpen={isOpen} onClose={onCancelClick}>
      <Container>
        <h1>Add Expense</h1>
        <AddModalInfo>
          <TextInput
            label='Expense Name'
            value={expense.expense}
            onChange={(value) => updateExpense('expense', value)}
          />

          <DatePicker
            selectedDate={
              expense.date.length > 0 ? new Date(expense.date) : undefined
            }
            placeholder={'Date'}
            onChange={(value) =>
              updateExpense('date', format(value, 'dd-MMM-yyyy'))
            }
          />
          <TextInput
            label='Cost'
            type='number'
            value={expense.cost.toString()}
            onChange={(value) => updateExpense('cost', parseFloat(value))}
          />

          <InputContainer>
            <Select
              mode='multiple'
              placeholder='Please select tags'
              onChange={handleDropdownChange}
              style={{
                width: '100%',
              }}
            >
              {dropdown}
            </Select>
          </InputContainer>
        </AddModalInfo>

        <ButtonContainer>
          <Button
            type='primary'
            color={Colors.green1}
            size='large'
            onClick={handleSubmit}
            disabled={!isSubmitButtonDisabled}
          >
            Submit New Expense
          </Button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
}
