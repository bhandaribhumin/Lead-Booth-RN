import { Box, Text } from "./Theme";

import React from "react";
import SocialLogin from "./SocialLogin";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface FooterProps {
    onPress:()=>void;
    title:string;
    action:string;
}
const Footer =({onPress,title,action}:FooterProps) => {return(
    <>
      <SocialLogin />
      <Box alignItems="center" margin="m">
        <TouchableWithoutFeedback
          variant="transparent"
          {...{onPress}}
        >
          <Text variant="button" color="white">
          <Text >
            {`${title} `}
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              {`${action}`}
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  )};

  export default Footer;