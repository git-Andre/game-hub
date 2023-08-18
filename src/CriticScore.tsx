import {Badge} from "@chakra-ui/react";

interface Props {
    score: number;
}

export const CriticScore = ({score}: Props) => {
    const color = score > 90 ? 'green' : score > 70 ? 'yellow' : '';

    return (
        <Badge colorScheme={color} fontSize='14px' borderRadius='4px' px={2}>{score}</Badge>
    );
};
