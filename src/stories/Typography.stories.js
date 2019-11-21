import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from 'react-router-dom';
import { Text, H1, H2, H3, H4, H5, H6 } from "../core/Typoghraphy";

storiesOf("Typography", module)
  .add("H1", () => (
    <H1>H1.Heading 1</H1>
  ),
    { notes: "H1 storybook component" })
  .add("H2", () => (
    <H2>H2.Heading 2</H2>
  ),
    { notes: "H2 storybook component" })
  .add("H3", () => (
    <H3>H3.Heading 3</H3>
  ),
    { notes: "H3 storybook component" })
  .add("H4", () => (
    <H4>H4.Heading 4</H4>
  ),
    { notes: "H4 storybook component" })
  .add("H5", () => (
    <H5>H5.Heading 5</H5>
  ),
    { notes: "H5 storybook component" })
  .add("H6", () => (
    <H6>H6.Heading 6</H6>
  ),
    { notes: "H6 storybook component" })
  .add("Text", () => (
    <Text>This deafult text</Text>
  ),
    { notes: "Text storybook component" })
  .add("Colored/Sized Text", () => (
    <BrowserRouter>
      <Text color="red" size={28}>This is a colored Text</Text>
    </BrowserRouter>
  ),
    { notes: "Colored Text storybook component" });