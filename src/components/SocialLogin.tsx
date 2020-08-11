import { Box, useTheme } from "./Theme";
import {
  ConfigureParams,
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { FaceBookSVG, GoogleSVG } from "./assets";
import React, { ReactNode, useEffect, useState } from "react";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface socialIconProps {
  children: ReactNode;
  userInfo?: null,
  error?: null,
}

const SocialIcon = ({ children }: socialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRedius.l * 2;
 
  return (
    <Box
      marginHorizontal="s"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius={theme.borderRedius.l}
    >
      {children}
    </Box>
  );
};
const SocialLogin = () => {
 const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '864449018245-d6gr84vs0fitgudiij8k49ub7m49l4ml.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
     // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
     // accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  
  }, [])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({ userInfo });
    } catch (error) {
      console.log('error',error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const theme = useTheme();
  return (
    <Box
      marginTop="m"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <SocialIcon >
      <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={signIn}
    />
        <GoogleSVG />
      </SocialIcon>
      <SocialIcon>
        <FaceBookSVG />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
