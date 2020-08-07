import * as Yup from "yup";

import {
  Button,
  Checkbox,
  Container,
  Footer,
  Text,
  TextInput,
} from "./../components";
import React,{useRef} from "react";
import { Routes, StackNavigationProps } from "./../components/Navigation";

import { Box } from "./../components/Theme";
import {Linking} from "react-native";
import { useFormik } from "formik";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, "ForgotPassword">) => {
  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  }= useFormik({
    validationSchema:ForgotPasswordSchema,
    initialValues:{ email: "" },
    onSubmit:(values) => console.log(values)
  });
  const footer = <Footer title="Don't work?" action="Try another way" onPress={()=>Linking.openURL("mailto:bhandaribhumin@gmail.com")} />

  return (
    <Container {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="m">
          Forgot Password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="m">
        Enter email address associated with your account
        </Text>
            <Box>
              <Box marginBottom="l"> 
                <TextInput
                  icon="mail"
                  placeholder="enter email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  returnKeyType="go"
                  returnKeyLable="go"
                  onSubmitEditing={() => handleSubmit()}
                ></TextInput>
              </Box>
            
            
              <Box alignItems="center" marginTop="l" justifyContent="center">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Reset Password"
                ></Button>
              </Box>
            </Box>
       
      </Box>
    </Container>
  );
};

export default ForgotPassword;
