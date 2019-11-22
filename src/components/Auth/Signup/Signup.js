import React from 'react';
import { Formik, Field } from 'formik';

import Button from '../../../core/Button';
import InputField from '../../../core/InputField';
import StyledLink from '../../../styled/StyledLink';
import StyledForm from '../../../styled/StyledForm';
import { H3, Text } from '../../../core/Typoghraphy';
import FlexWrapper from '../../../styled/FlexWrapper';
import { SignupSchema } from '../../../utils/formSchemas';

export default function Signup() {
  const initialValues = {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values, actions) => {}}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} marginRight={-120}>
          <H3 weight={500}>Create Account</H3>
          <Field name="name" type="text" label="Name" placeholder="Enter your name" component={InputField} />
          <Field name="email" type="email" label="Email Address" placeholder="Enter your email" component={InputField} />
          <Field name="password" type="password" label="Password" placeholder="Enter your password" component={InputField} />

          <FlexWrapper justifyContent="space-between" alignItems="center" marginTop={10}>
            <StyledLink to="/password-reset">Forgot Password?</StyledLink>
            <Button buttonType="primary" type="submit">Sign up</Button>
          </FlexWrapper>

          <Text size={14} mt={60}>
            Already have an account?
            <StyledLink to="/login" marginleft={10}>Login here</StyledLink>
          </Text>
        </StyledForm>
      )}
    </Formik>
  )
}
