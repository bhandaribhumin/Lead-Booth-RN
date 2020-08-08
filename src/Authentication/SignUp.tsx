import * as Yup from "yup";

import {
  Button,
  Checkbox,
  Container,
  Footer,
  Text,
  TextInput,
} from "./../components";
import React, { useRef } from "react";
import { Routes, StackNavigationProps } from "./../components/Navigation";

import { Box } from "./../components/Theme";
import { useFormik } from "formik";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Password don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const { errors, touched, handleChange, handleBlur, handleSubmit } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: { email: "", password: "", passwordConfirmation: "" },
      onSubmit: (values) => navigation.navigate("Home"),
    }
  );
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Welcome SignUp
        </Text>
        <Text variant="body" textAlign="center" marginBottom="m">
          User your credentials below and login to your account{" "}
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="enter email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLable="next"
              onSubmitEditing={() => password.current?.focus()}
            ></TextInput>
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyType="next"
              returnKeyLable="next"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
            ></TextInput>
          </Box>
          <Box>
            <TextInput
              icon="lock"
              ref={passwordConfirmation}
              placeholder="Confirm your Password"
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyType="go"
              returnKeyLable="go"
              onSubmitEditing={() => handleSubmit()}
            ></TextInput>
          </Box>
          <Box alignItems="center" marginTop="l" justifyContent="center">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
            ></Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
