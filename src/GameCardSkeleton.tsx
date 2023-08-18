import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  height: string;
}
export const GameCardSkeleton = ({height}: Props ) => {
  return (<Card height={height}>
    <Skeleton/>
    <CardBody>
           <SkeletonText />
    </CardBody>
  </Card>);
};
