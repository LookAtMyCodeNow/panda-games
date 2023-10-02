import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const bgColor = score > 90 ? "#19e619" : score > 85 ? "#4bdbfb" : "yellow";

  return (
    <Badge
      alignSelf={"flex-start"}
      borderRadius={"8px"}
      padding={"2px 8px"}
      fontSize={"1xl"}
      bgColor={bgColor}
      color={"#4a3e3e"}
    >
      {score}
    </Badge>
  );
};

export default GameScore;
