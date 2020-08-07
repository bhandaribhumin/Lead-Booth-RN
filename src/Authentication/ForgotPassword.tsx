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
  const footer = <Footer title="Don't have an account?" action="Sign Up here" onPress={()=>true} />

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Forgot Password
        </Text>
        <Text variant="body" textAlign="center">
          User your credentials below 
        </Text>
            <Box>
              <Box marginBottom="l">
                <TextInput
                  icon="mail"
                  placeholder="enter email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  returnKeyType="next"
                  returnKeyLable="next"
                  onSubmitEditing={() => handleSubmit()}
                ></TextInput>
              </Box>
            
            
              <Box alignItems="center" marginTop="l" justifyContent="center">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Send Email"
                ></Button>
              </Box>
            </Box>
       
      </Box>
    </Container>
  );
};

export default ForgotPassword;
