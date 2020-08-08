import { Box, Text, useTheme } from "../../components/Theme";

import React from "react";

interface DashBoardProps {}
const DashBoard = () => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="danger2">
        <Text>Home</Text>
    </Box>
  );
};

export default DashBoard;
