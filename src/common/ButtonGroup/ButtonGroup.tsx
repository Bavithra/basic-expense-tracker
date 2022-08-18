import React, { useState } from "react";
import { GraphPeriod } from "../../enums/GraphPeriod.enum";
import { Button, Container } from "./ButtonGroup.styles";

type Props = {
  buttons: GraphPeriod[];
  onButtonClick : (buttonLabel: GraphPeriod) => void;
};

const ButtonGroup = (props: Props) => {
  const {buttons, onButtonClick} = props;
  const [clickedId, setClickedId] = useState(1);

  const handleClick = (buttonLabel: GraphPeriod, id: number) => {
    setClickedId(id);
    onButtonClick(buttonLabel);
  };

  return (
    <Container>
      {buttons.map((buttonLabel: GraphPeriod, index: number) => (
        <Button
          key={index}
          onClick={() => handleClick(buttonLabel, index)}
          isActive={index === clickedId}
        >
          {buttonLabel}
        </Button>
      ))}
    </Container>
  );
};

export default ButtonGroup;