import { format } from "date-fns";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TextInput from "../TextInput";
import { Container } from "./DatePicker.styles";

const DATE_FORMAT_WITH_DAY = "dd-MMM-yyyy";

type Props = {
  selectedDate: Date | undefined;
  placeholder: string;
  onChange: (date: Date) => void;
  dateFormat?: string;
};

export default function DatePicker(props: Props) {
  const {
    selectedDate,
    placeholder,
    onChange,
    dateFormat = DATE_FORMAT_WITH_DAY,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleSelectedDateChange(value: string) {
    onChange(new Date(value)!);
  }

  return (
    <ReactDatePicker
      open={isOpen}
      preventOpenOnFocus={true}
      onChange={onChange}
      onClickOutside={handleClick}
      selected={selectedDate}
      onSelect={handleClick}
      dateFormat={dateFormat}
      maxDate={new Date()}
      customInput={
        <Container>
          <div onClick={handleClick}>
          <TextInput
                label={placeholder}
                onChange={handleSelectedDateChange}
                readOnly
                value={selectedDate && format(
                  selectedDate,
                  dateFormat
                )}
              />
          </div>
        </Container>
      }
    />
  );
}
