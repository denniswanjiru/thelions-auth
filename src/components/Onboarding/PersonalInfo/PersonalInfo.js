import React from 'react'
import { Formik, Field } from 'formik';

import Button from 'core/Button';
import InputField from 'core/InputField';
import StyledForm from 'styled/StyledForm';
import FlexWrapper from 'styled/FlexWrapper';
import { PersonalInfoSchema } from 'utils/formSchemas';

export default function PersonalInfo({ history, handleCurrent }) {
  const initialValues = {
    phone: "",
    email: "",
    linkedin: "",
    salary: undefined
  }

  const handleBack = () => {
    handleCurrent(-1);
    history.push("/onboarding/resume");
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PersonalInfoSchema}
      onSubmit={async (values, actions) => {
        handleCurrent(+1);
        history.push("/onboarding/experience");
      }}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} data-testid="personal-info-form">
          <Field name="phone" label="Phone Number" placeholder="Enter your phone number" component={InputField} />
          <Field name="email" label="Email Address" type="email" placeholder="Enter your email" component={InputField} />
          <Field name="linkedin" label="Linkedin Profile" placeholder="Enter a link to your linkedin profile" component={InputField} />
          <Field name="salary" label="What's your expected salary?" placeholder="Enter your minmum salary" component={InputField} />

          <FlexWrapper justifyContent="flex-end" alignItems="center" marginTop={10}>
            <Button buttonType="ghost" onClick={handleBack} mr={20}>Back</Button>
            <Button buttonType="primary" type="submit">Next Step</Button>
          </FlexWrapper>
        </StyledForm>
      )}
    </Formik>
  )
}
