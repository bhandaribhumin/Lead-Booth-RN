import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

import React from "react";
import { RectButton } from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}
const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}
    >
      <RoundedIcon {...props} />
    </RectButton>
  );
};
RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};
export default RoundedIconButton;
