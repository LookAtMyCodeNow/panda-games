import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImage from "../services/image-url";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import { wrap } from "framer-motion";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={getCroppedImage(game.background_image)} objectFit={"fill"} />
      <CardBody bg={"blue.700"}>
        <Heading fontSize={"2xl"} color={"white"}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"} marginTop={"5px"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
