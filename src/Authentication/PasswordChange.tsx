import * as Yup from "yup";

import {
  Button,
  Checkbox,
  Container,
  Footer,
  RoundedIcon,
  RoundedIconButton,
  Text,
  TextInput,
} from "./../components";
import { Routes, StackNavigationProps } from "./../components/Navigation";

import { Box } from "./../components/Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { Linking } from "react-native";
import React from "react";

const SIZE = 80;
const PasswordChange = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChange">) => {
  const footer = (
    <Box flexDirection="row" justifyContent="center">
      <RoundedIconButton
        name="x"
        size={60}
        backgroundColor="white"
        color="secondary"
        onPress={() => navigation.pop()}
      />
    </Box>
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box justifyContent="center" alignItems="center" flex={1}>
       <RoundedIcon
        name="check" 
        size={SIZE}
        backgroundColor="primaryLight"
        color="primary"
       />
       
        
        <Text variant="title1" textAlign="center" marginBottom="m">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="m">
          <Text> Click This window and login again</Text>
        </Text>

        <Box alignItems="center" marginTop="l" justifyContent="center">
          <Button
            variant="primary"
            onPress={() => navigation.navigate("Login")}
            label="Login Again"
          ></Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChange;
