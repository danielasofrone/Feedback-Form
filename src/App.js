import React from "react";
// import PropTypes from 'prop-types';
import { useState } from "react";

import {
  Wrapper,
  QuestionContainer,
  TextContainer,
  StyledRadioButton,
  SelectableOption,
  SubmitButton
} from "./App.styled.js";

const App = () => {
  const [isChecked, setIsChecked] = useState(null);

  const questions = [
    {
      label: "1. This is a very short text",
      options: [
        { valueStatus: "value1", keyStatus: "1.1" },
        { valueStatus: "value2", keyStatus: "1.2" },
        { valueStatus: "value3", keyStatus: "1.3" }
      ]
    },
    {
      label: "2. This is a short text",
      options: [
        { valueStatus: "value1", keyStatus: "1.1" },
        { valueStatus: "value2", keyStatus: "1.2" },
        { valueStatus: "value3", keyStatus: "1.3" }
      ]
    },
    {
      label: "3. This is a medium text",
      options: [
        { valueStatus: "value1", keyStatus: "1.1" },
        { valueStatus: "value2", keyStatus: "1.2" },
        { valueStatus: "value3", keyStatus: "1.3" }
      ]
    },
    {
      label: "4. This is a long text",
      options: [
        { valueStatus: "value1", keyStatus: "1.1" },
        { valueStatus: "value2", keyStatus: "1.2" },
        { valueStatus: "value3", keyStatus: "1.3" }
      ]
    },
    {
      label: "5. This is a very long text",
      options: [
        { valueStatus: "value1", keyStatus: "1.1" },
        { valueStatus: "value2", keyStatus: "1.2" },
        { valueStatus: "value3", keyStatus: "1.3" }
      ]
    }
  ];

  return (
    <Wrapper>
      <QuestionContainer>
        {questions.map((item, index) => (
          <TextContainer key={index}>
            <p>{item.label}</p>
            {item.options.map((selectedOption, e) => (
              <SelectableOption>
                <StyledRadioButton
                  key={e}
                  type="radio"
                  name={item.label}
                  value={selectedOption.valueStatus}
                  isChecked={selectedOption.keyStatus}
                  onChange={() => setIsChecked(selectedOption.keyStatus)}
                />
                <label className="labelStyle">
                  {selectedOption.valueStatus}
                </label>
              </SelectableOption>
            ))}
          </TextContainer>
        ))}
      </QuestionContainer>
      <SubmitButton>Submit</SubmitButton>
    </Wrapper>
  );
};

export default App;
