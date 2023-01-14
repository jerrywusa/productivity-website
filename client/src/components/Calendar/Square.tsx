import { Text, Button } from "@chakra-ui/react";
import { SquareObject, SquareObjectColor } from "../../types/Types";

type SquareProps = {
  squareObject: SquareObject | null;
  dayList: Array<SquareObject>;
  setDayList: (a: Array<SquareObject>) => void;
};

function Square({ squareObject, dayList, setDayList }: SquareProps) {
  return (
    <Button
      width="100%"
      height="100%"
      colorScheme={
        squareObject == null ? SquareObjectColor.blackAlpha : squareObject.color
      }
      onClick={() => {
        if (squareObject == null) {
          return;
        }
        switch (squareObject.color) {
          case SquareObjectColor.blackAlpha:
            squareObject.color = SquareObjectColor.green;
            break;
          case SquareObjectColor.green:
            squareObject.color = SquareObjectColor.red;
            break;
          case SquareObjectColor.red:
            squareObject.color = SquareObjectColor.blackAlpha;
        }
        setDayList(structuredClone(dayList));
      }}
    >
      <Text>{squareObject == null ? null : squareObject.dayNumber}</Text>
    </Button>
  );
}

export default Square;
