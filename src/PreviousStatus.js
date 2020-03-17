import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, TextContainer, TextRow } from "./previousStatus.styled";
import {
  Navigation,
  PageTitleContainer,
  PageTitle,
  NavigationLink
} from "./homePage.styled";

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
  <Wrapper>
    <Navigation>
      <PageTitleContainer>
        <PageTitle>
          <Link to={"/"}>Daniela Sofrone Feedback</Link>
        </PageTitle>
      </PageTitleContainer>
      <NavigationLink>
        <Link to={"/"}>Feedback form</Link>
      </NavigationLink>
    </Navigation>
    <TextContainer>
      {/* {myEntry && <TextRow>{myEntry.fields.title}</TextRow>} */}
    </TextContainer>
  </Wrapper>
);

export default PreviousStatus;
