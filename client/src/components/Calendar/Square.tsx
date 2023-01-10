import { Card, CardBody, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
type SquareProps = {
  day: number | null;
};
function Square({ day }: SquareProps) {
  const [color, setColor] = useState("blackAlpha");

  return (
    <Button
      width={150}
      height={150}
      colorScheme={color}
      onClick={() => {
        switch (color) {
          case "blackAlpha":
            setColor("green");
            break;
          case "green":
            setColor("red");
            break;
          case "red":
            setColor("blackAlpha");
        }
      }}
    >
      <Text>{day}</Text>
    </Button>
  );
}

export default Square;
