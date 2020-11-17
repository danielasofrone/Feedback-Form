import React from "react";
import { useState } from "react";
import * as S from "./homePage.styled.js";
import PopupMessage from "../PopupMessage/PopupMessage";
import logodaniela from "../assets/logodaniela.svg";

const contentful = require("contentful-management");
const client = contentful.createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const HomePage = () => {
  const [isChecked, setIsChecked] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [status, setStatus] = useState("error");

  const checkErrorBeforeSubmit = () => {
    const checkedInfo = Object.keys(isChecked).map((key) => key);
    if (checkedInfo.length < 6) return true;
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
        .then((space) =>
          space.createEntry(process.env.REACT_APP_ENTRY_ID, {
            fields: {
              answers: {
                "en-US": isChecked,
              },
            },
          })
        )
        .then(
          setTimeout(function () {
            window.location.reload(1);
          }, 5000)
        )
        .catch(console.error);
    }
  };

  const questions = [
    {
      label: "1. Code reviews",
      options: [
        { valueStatus: "to do", keyStatus: "1.1" },
        { valueStatus: "in progress", keyStatus: "1.2" },
        { valueStatus: "done", keyStatus: "1.3" },
      ],
    },
    {
      label: "2. Use pure Css",
      options: [
        { valueStatus: "to do", keyStatus: "2.1" },
        { valueStatus: "in progress", keyStatus: "2.2" },
        { valueStatus: "done", keyStatus: "2.3" },
      ],
    },
    {
      label: "3. Understand how our application works(Routing, Nextjs etc)",
      options: [
        { valueStatus: "to do", keyStatus: "3.1" },
        { valueStatus: "in progress", keyStatus: "3.2" },
        { valueStatus: "done", keyStatus: "3.3" },
      ],
    },
    {
      label: "4. Get out of comfort zone by trying other types of tickets",
      options: [
        { valueStatus: "to do", keyStatus: "4.1" },
        { valueStatus: "in progress", keyStatus: "4.2" },
        { valueStatus: "done", keyStatus: "4.3" },
      ],
    },
    {
      label: "5. Security  - good practices",
      options: [
        { valueStatus: "to do", keyStatus: "5.1" },
        { valueStatus: "in progress", keyStatus: "5.2" },
        { valueStatus: "done", keyStatus: "5.3" },
      ],
    },
    {
      label: "6. Backend data structure",
      options: [
        { valueStatus: "to do", keyStatus: "5.1" },
        { valueStatus: "in progress", keyStatus: "5.2" },
        { valueStatus: "done", keyStatus: "5.3" },
      ],
    },
  ];
  console.log("Text", isChecked);
  return (
    <S.Wrapper>
      <S.InputContainer>
        <S.QuestionContainer>
          <S.PageTitleContainer>
            <S.Icon src={logodaniela}></S.Icon>
          </S.PageTitleContainer>
          <S.SubtitleContainer>
            <S.Subtitle>
              <p>Feedback form</p>
            </S.Subtitle>
          </S.SubtitleContainer>
          {questions.map((item, index) => (
            <S.TextContainer key={index}>
              <p>{item.label}</p>
              {item.options.map((selectedOption, e) => (
                <S.SelectableOption>
                  <S.StyledRadioButton
                    key={e}
                    type="radio"
                    name={item.label}
                    value={selectedOption.valueStatus}
                    isChecked={selectedOption.keyStatus}
                    onChange={() => {
                      setIsChecked({
                        ...isChecked,
                        [index]: selectedOption.keyStatus,
                      });
                    }}
                  />
                  <label className="labelStyle">
                    {selectedOption.valueStatus}
                  </label>
                </S.SelectableOption>
              ))}
            </S.TextContainer>
          ))}
          <S.SubmitButton onClick={handleSubmit}>Submit</S.SubmitButton>
        </S.QuestionContainer>
      </S.InputContainer>
      {isPopupOpen && (
        <PopupMessage
          popupStatus={status}
          closeAction={closePopup}
        ></PopupMessage>
      )}
    </S.Wrapper>
  );
};

export default HomePage;
