import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from 'react-router-dom';

import StyledLink from "../styled/StyledLink";

storiesOf("Default Link", module)
  .add("Default Link", () => (
    <BrowserRouter>
      <StyledLink>This is a link</StyledLink>
    </BrowserRouter>
  ),
    { notes: "Default Link storybook component" })
  .add("Colored Link", () => (
    <BrowserRouter>
      <StyledLink color="red">This is a colored link</StyledLink>
    </BrowserRouter>
  ),
    { notes: "Colored Link storybook component" });
