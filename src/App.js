import React from "react";
import { useState } from "react";
import {
  Wrapper,
  QuestionContainer,
  InputContainer,
  TextContainer,
  StyledRadioButton,
  SelectableOption,
  SubmitButton
} from "./app.styled.js";
import PopupMessage from "./PopupMessage";

const contentful = require("contentful-management");
const client = contentful.createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

const App = () => {
  const [isChecked, setIsChecked] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [status, setStatus] = useState("error");

  const checkErrorBeforeSubmit = () => {
    const checkedInfo = Object.keys(isChecked).map(key => key);
    if (checkedInfo.length < 5) return true;
    return false;
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = () => {
    if (checkErrorBeforeSubmit()) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(true);
      setStatus("success");
      client
        .getSpace(process.env.REACT_APP_SPACE_ID)
        .then(space =>
          space.createEntry(process.env.REACT_APP_ENTRY_ID, {
            fields: {
              answers: {
                "en-US": isChecked
              }
            }
          })
        )
        .then(entry => console.log(entry))
        .catch(console.error);
    }
  };

  const questions = [
    {
      label: "1. This is a very short text",
      options: [
        { valueStatus: "value1", keyStatus: "1.1" },
        { valueStatus: "value2", keyStatus: "1.2" },
        { valueStatus: "value3", keyStatus: "1.3" }
      ]
    }
    // {
    //   label: "2. This is a short text",
    //   options: [
    //     { valueStatus: "value1", keyStatus: "2.1" },
    //     { valueStatus: "value2", keyStatus: "2.2" },
    //     { valueStatus: "value3", keyStatus: "2.3" }
    //   ]
    // },
    // {
    //   label: "3. This is a medium text",
    //   options: [
    //     { valueStatus: "value1", keyStatus: "3.1" },
    //     { valueStatus: "value2", keyStatus: "3.2" },
    //     { valueStatus: "value3", keyStatus: "3.3" }
    //   ]
    // },
    // {
    //   label: "4. This is a long text",
    //   options: [
    //     { valueStatus: "value1", keyStatus: "4.1" },
    //     { valueStatus: "value2", keyStatus: "4.2" },
    //     { valueStatus: "value3", keyStatus: "4.3" }
    //   ]
    // },
    // {
    //   label: "5. This is a very long text",
    //   options: [
    //     { valueStatus: "value1", keyStatus: "5.1" },
    //     { valueStatus: "value2", keyStatus: "5.2" },
    //     { valueStatus: "value3", keyStatus: "5.3" }
    //   ]
    // }
  ];

  return (
    <Wrapper>
      <InputContainer>
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
                    onChange={() =>
                      setIsChecked({
                        ...isChecked,
                        [index]: selectedOption.keyStatus
                      })
                    }
                  />
                  <label className="labelStyle">
                    {selectedOption.valueStatus}
                  </label>
                </SelectableOption>
              ))}
            </TextContainer>
          ))}
        </QuestionContainer>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </InputContainer>
      {isPopupOpen && (
        <PopupMessage
          popupStatus={status}
          closeAction={closePopup}
        ></PopupMessage>
      )}
    </Wrapper>
  );
};

export default App;
