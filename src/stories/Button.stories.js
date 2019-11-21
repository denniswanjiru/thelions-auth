import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../core/Button";

storiesOf("Button", module)
  .add("Normal Button", () => (
    <Button>Button</Button>
  ),
    { notes: "Button storybook component" })
  .add("Primary Button", () => (
    <Button buttonType="primary">Button</Button>
  ),
    { notes: "Ghost storybook component" })
  .add("Ghost Button", () => (
    <Button buttonType="ghost">Button</Button>
  ),
    { notes: "Button storybook component" })
  .add("Round Button", () => (
    <Button buttonType="primary" shape="round">Button</Button>
  ),
    { notes: "Button storybook component" })
  .add("Cirle Button", () => (
    <Button buttonType="primary" shape="circle">B</Button>
  ),
    { notes: "Button storybook component" })
  .add("Disabled Button", () => (
    <Button buttonType="primary" disabled>Disabled</Button>
  ),
    { notes: "Button storybook component" })
  .add("Loading Button", () => (
    <Button buttonType="primary" loading="button">Loading</Button>
  ),
    { notes: "Button storybook component" });
