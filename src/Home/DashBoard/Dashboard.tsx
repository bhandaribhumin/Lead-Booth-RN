import { Box, Header, Text, useTheme } from "../../components";
import React, { useState } from "react";
import { interpolate, sub } from "react-native-reanimated";

import Background from "./Background";
import Card from "./Card";
import { HomeNavigatonProps } from "../../components/Navigation";
import { useTransition } from "react-native-redash";

const cards = [{ index: 3 }, { index: 2 }, { index: 1 }, { index: 0 }];
interface DashBoardProps {}
const step = 1 / (cards.length - 1);
const DashBoard = ({ navigation }: HomeNavigatonProps<"DashBoard">) => {
  const theme = useTheme();
  const [currentIndex, setcurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Home"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setcurrentIndex((prev) => prev + step)}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default DashBoard;
