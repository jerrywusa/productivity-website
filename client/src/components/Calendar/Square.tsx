import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { SquareObject } from "../../types/ComponentTypes";

type SquareProps = {
  squareObject: SquareObject | null;
  dayList: Array<SquareObject>;
  setDayList: (a: Array<SquareObject>) => void;
};

function Square({ squareObject, dayList, setDayList }: SquareProps) {
  return (
    <Button
      width={150}
      height={150}
      colorScheme={squareObject == null ? "blackAlpha" : squareObject.color}
      onClick={() => {
        if (squareObject == null) {
          return;
        }
        switch (squareObject.color) {
          case "blackAlpha":
            squareObject.color = "green";
            break;
          case "green":
            squareObject.color = "red";
            break;
          case "red":
            squareObject.color = "blackAlpha";
        }
        setDayList(structuredClone(dayList));
      }}
    >
      <Text>{squareObject == null ? null : squareObject.dayNumber}</Text>
    </Button>
  );
}

export default Square;
