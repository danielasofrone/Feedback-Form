import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./previousStatus.styled";
import {
  Navigation,
  PageTitleContainer,
  PageTitle,
  NavigationLink
} from "./homePage.styled";
// const contentful = require("contentful");

// const client = contentful.createClient({
//   space: "<space_id>",
//   environment: "<environment_id>", // defaults to 'master' if not set
//   accessToken: "<content_delivery_api_key>"
// });

// client
//   .getEntry("<entry_id>")
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
  </Wrapper>
);

export default PreviousStatus;
