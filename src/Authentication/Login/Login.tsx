import { Button, Container, SocialLogin, Text, TextInput } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import { Box } from "../../components/Theme";
import React from "react";

const emailValidator = (email:string) => /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
const Login = ({navigation}:StackNavigationProps<Routes,"Login">)=>{
    const footer = (
        <>
        <SocialLogin  />
        <Box  alignItems="center">
        <Button variant="transparent" onPress={()=>{alert('sign up')}}>
            <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">Don't have an account? </Text>
            <Text marginLeft="s" variant="button" color="primary">Sign Up here </Text>
            </Box>
        </Button>
        </Box>
        </>
    )
   return(
        <Container {...{footer}}>
            <Box padding="xl">
            <Text variant="title1" textAlign="center" marginBottom="m">Welcome Back</Text>
            <Text variant="body" textAlign="center">User your credentials below and login to your account </Text>   
            <TextInput icon="mail" placeholder="enter email" validator={emailValidator}></TextInput>
                </Box>
         
            </Container>
            );
    }

export default Login;