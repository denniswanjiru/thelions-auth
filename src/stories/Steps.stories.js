import React from "react";
import { storiesOf } from "@storybook/react";

import Steps from "../core/Steps";

storiesOf("Steps", module)
  .add("Steps", () => (
    <Steps current={2}>
      <Steps.Step title="Resume"/>
      <Steps.Step title="Experience"/>
      <Steps.Step title="Personal Info"/>
    </Steps>
  ),
    { notes: "Steps storybook component" });
