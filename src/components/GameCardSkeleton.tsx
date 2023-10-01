import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// Tworzymy Element ktory bedzie sie pokazywal w miejscu kazdego img zanim on sie zaladuje
const GameCardSkeleton = () => {
  return (
    // Te same parametry co w GameCard nasz img, zeby sie na siebie nakladaly i byl fajny efekt
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      {/* Skeleton to component z Chakry, sluzacy do umieszczenie czegos widocznego zanim Card sie zaladuje */}
      <Skeleton height="200px" />
      {/* Musi tez byc CardBody bo tam tez jest a w nim SkeletonText jakby tekst za mgla. */}
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
