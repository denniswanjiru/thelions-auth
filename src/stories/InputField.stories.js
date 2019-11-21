import React from "react";
import { storiesOf } from "@storybook/react";
import * as Yup from "yup";

import { Field, Formik } from "formik";
import InputField from "../core/InputField";

const InputSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email field must be a valid email")
    .required("Email field is required.")
});


storiesOf("Input", module)
  .add("Input", () => (
    <Formik
      initialValues={{name: ""}}
      validationSchema={InputSchema}
      onSubmit={async () => {}}
    >
      {({ handleSubmit }) => (
        <Field name="email" type="email" label="Email Address" placeholder="Enter your email" component={InputField} />
      )}
    </Formik>
  ),
  { notes: "Input storybook component" }
);
