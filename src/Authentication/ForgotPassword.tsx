import * as Yup from "yup";

import {
  Button,
  Container,
  Footer,
  Text,
  TextInput,
} from "./../components";

import { AuthNavigatonProps } from "./../components/Navigation";
import { Box } from "./../components/Theme";
import {Linking} from "react-native";
import React from "react";
import { useFormik } from "formik";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({ navigation }: AuthNavigatonProps<"ForgotPassword">) => {
  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  }= useFormik({
    validationSchema:ForgotPasswordSchema,
    initialValues:{ email: "" },
    onSubmit:() => navigation.navigate('PasswordChange')
  });
  const footer = <Footer title="Don't work?" action="Try another way" onPress={()=>Linking.openURL("mailto:bhandaribhumin@gmail.com")} />

  return (
    <Container pattern={2} {...{ footer }}>
     
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
       
     
    </Container>
  );
};

export default ForgotPassword;
