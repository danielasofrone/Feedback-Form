import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Wrapper,
  QuestionContainer,
  InputContainer,
  TextContainer,
  StyledRadioButton,
  SelectableOption,
  SubmitButton,
  Navigation,
  PageTitleContainer,
  PageTitle,
  NavigationLink
} from "./homePage.styled.js";
import PopupMessage from "./PopupMessage";

const contentful = require("contentful-management");
const client = contentful.createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

const HomePage = () => {
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
      label: "1. Code reviews",
      options: [
        { valueStatus: "to do", keyStatus: "1.1" },
        { valueStatus: "in progress", keyStatus: "1.2" },
        { valueStatus: "done", keyStatus: "1.3" }
      ]
    },
    {
      label: "2. Use pure Css",
      options: [
        { valueStatus: "to do", keyStatus: "2.1" },
        { valueStatus: "in progress", keyStatus: "2.2" },
        { valueStatus: "done", keyStatus: "2.3" }
      ]
    },
    {
      label: "3. Understand how our application works(Routing, Next,js etc)",
      options: [
        { valueStatus: "to do", keyStatus: "3.1" },
        { valueStatus: "in progress", keyStatus: "3.2" },
        { valueStatus: "done", keyStatus: "3.3" }
      ]
    },
    {
      label: "4. Get out of comfort zone by trying other types of tickets",
      options: [
        { valueStatus: "to do", keyStatus: "4.1" },
        { valueStatus: "in progress", keyStatus: "4.2" },
        { valueStatus: "done", keyStatus: "4.3" }
      ]
    },
    {
      label: "5. Security  - good practices",
      options: [
        { valueStatus: "to do", keyStatus: "5.1" },
        { valueStatus: "in progress", keyStatus: "5.2" },
        { valueStatus: "done", keyStatus: "5.3" }
      ]
    },
    {
      label: "6. Backend data structure",
      options: [
        { valueStatus: "to do", keyStatus: "5.1" },
        { valueStatus: "in progress", keyStatus: "5.2" },
        { valueStatus: "done", keyStatus: "5.3" }
      ]
    }
  ];
  console.log("Text", isChecked);
  return (
    <Wrapper>
      <Navigation>
        <PageTitleContainer>
          <PageTitle>Daniela Sofrone Feedback</PageTitle>
        </PageTitleContainer>
        <NavigationLink>
          {" "}
          <Link to={"/previous-feedback"}>Previous feedback</Link>
        </NavigationLink>
      </Navigation>
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
                    onChange={() => {
                      setIsChecked({
                        ...isChecked,
                        [index]: selectedOption.keyStatus
                      });
                    }}
                  />
                  <label className="labelStyle">
                    {selectedOption.valueStatus}
                  </label>
                </SelectableOption>
              ))}
            </TextContainer>
          ))}
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </QuestionContainer>
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

export default HomePage;
