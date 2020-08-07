import * as Yup from "yup";

import {
  Button,
  Checkbox,
  Container,
  SocialLogin,
  Text,
  TextInput,
} from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import { Box } from "../../components/Theme";
import { Formik } from "formik";
import React from "react";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => {
            alert("sign up");
          }}
        >
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?{" "}
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here{" "}
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          User your credentials below and login to your account{" "}
        </Text>

        <Formik
          initialValues={{ email: "", password: "",remember:true }}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValues
          }) => (
            <Box>
              <Box marginBottom="l">
                <TextInput
                  icon="mail"
                  placeholder="enter email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                ></TextInput>
              </Box>
              <Box>
                <TextInput
                  icon="lock"
                  placeholder="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur}
                  error={errors.password}
                  touched={touched.password}
                ></TextInput>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Checkbox
                  label="Remember me?"
                  checked={values.remember}
                  onChange={()=>setFieldValues("remember",!values.remember)}
                />
                <Button variant="transparent">
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
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
