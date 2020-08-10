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

import { AuthNavigatonProps } from "./../components/Navigation";
import { Box } from "./../components/Theme";
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: AuthNavigatonProps<"Login">) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: true },
    onSubmit: (values) => navigation.navigate("Home"),
  });
  const password = useRef<typeof TextInput>(null);
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="m">
        Welcome Back
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
        <Box>
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
            returnKeyType="go"
            returnKeyLable="go"
            onSubmitEditing={() => handleSubmit()}
          ></TextInput>
        </Box>
        <Box marginTop="m" flexDirection="row" justifyContent="space-between">
          <Checkbox
            label="Remember me?"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <Button
            onPress={() => navigation.navigate("ForgotPassword")}
            variant="transparent"
          >
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="l" justifyContent="center">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="login"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
