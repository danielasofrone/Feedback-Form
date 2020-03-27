import React from "react";
import { Link } from "react-router-dom";
import * as S from "./homePage.styled.js";
import logodaniela from "./assets/logodaniela.svg";
import success from "./assets/success.svg";
import todo from "./assets/todo.svg";
import progress from "./assets/progress.svg";

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

const PreviousStatus = () => (
  <S.Wrapper>
    <S.Navigation>
      <S.PageTitleContainer>
        <Link to={"/"}>
          {" "}
          <S.Icon src={logodaniela}></S.Icon>
        </Link>
        <S.NavigationLink>
          <Link to={"/"}>Feedback form</Link>
        </S.NavigationLink>
      </S.PageTitleContainer>
    </S.Navigation>
    <S.SubtitleContainer>
      <S.Subtitle isHomepage={"0 auto"}>
        <p>Previous Status</p>
      </S.Subtitle>
    </S.SubtitleContainer>
    <S.TextContainer></S.TextContainer>
  </S.Wrapper>
);

export default PreviousStatus;
