import React from "react";
import { Link } from "react-router-dom";
import * as S from "../HomePage/homePage.styled.js";
import logodaniela from "../assets/logodaniela.svg";
import done from "../assets/done.svg";
import todo from "../assets/todo.svg";
import progress from "../assets/progress.svg";

// const contentful = require("contentful");

// const client = contentful.createClient({
//   content_type: "question",
//   space: process.env.REACT_APP_SPACE_ID,
//   environment: "master",
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN_READ
// });

// let myEntry = {};

// client
//   .getEntry(process.env.REACT_APP_ENTRY_ID_READ)
//   .then(entry => console.log(entry))
//   .catch(console.error);

const questions = [
  "1. Code reviews",
  "2. Use pure Css",
  "3. Understand how our application works( Routing, Next.js etc)",
  "4. Get out of comfort zone by trying other types of tickets",
  "5. Security - good practices",
  "6. Backend data structure",
];
const PreviousStatus = () => (
  <S.Wrapper>
    <S.InputContainer>
      <S.QuestionContainer>
        <S.PageTitleContainer>
          <Link to={"/"}>
            <S.Icon src={logodaniela}></S.Icon>
          </Link>
          <S.NavigationLink>
            <Link to={"/"}>Feedback form</Link>
          </S.NavigationLink>
        </S.PageTitleContainer>
        <S.SubtitleContainer>
          <S.Subtitle>
            <p>Previous status</p>
          </S.Subtitle>
        </S.SubtitleContainer>
        <S.TextContainer isPreviousPage={" 25px"}>
          <S.DateContainer>4 December 2019</S.DateContainer>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[0]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[1]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[2]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[3]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[4]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[5]}</S.Question>
          </S.Element>
        </S.TextContainer>

        <S.TextContainer isPreviousPage={" 25px"}>
          <S.DateContainer>31 January 2020</S.DateContainer>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={progress}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[0]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={done}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[1]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={progress}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[2]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={progress}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[3]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={progress}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[4]}</S.Question>
          </S.Element>
          <S.Element>
            <S.IconContainer>
              <S.ElementIcon src={todo}></S.ElementIcon>
            </S.IconContainer>
            <S.Question>{questions[5]}</S.Question>
          </S.Element>
        </S.TextContainer>
      </S.QuestionContainer>
    </S.InputContainer>
  </S.Wrapper>
);

export default PreviousStatus;
