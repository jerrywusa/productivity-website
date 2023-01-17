import Square from "./Square";
import { Card, Text, Flex } from "@chakra-ui/react";
import { SquareObject } from "../../types/Types";
import { getWeekdayNumber, weekdayNames } from "../../utils/Utils";
import { uid } from "uid";

// rowlist is used to generate calendar Square.tsx
function createRowList(
  year: number,
  month: number,
  dayList: Array<SquareObject>
): Array<Array<SquareObject | null>> {
  const startingWeekdayNumber = getWeekdayNumber(year, month, 1);
  const dayListWithNulls: Array<SquareObject | null> = Array.from(dayList);
  for (let i = 0; i < startingWeekdayNumber; i++) {
    dayListWithNulls.unshift(null);
  }
  while (dayListWithNulls.length < 35) {
    dayListWithNulls.push(null);
  }

  let rowList = [];
  let dayListWithNullsIdx = 0;
  for (let r = 0; r < 5; r++) {
    let row = [];
    for (let c = 0; c < 7; c++) {
      row.push(dayListWithNulls[dayListWithNullsIdx++]);
    }
    rowList.push(row);
  }
  return rowList;
}

type CalendarProps = {
  year: number;
  month: number;
  dayList: Array<SquareObject>;
  setDayList: (a: Array<SquareObject>) => void;
};

function Calendar({ year, month, dayList, setDayList }: CalendarProps) {
  let rowList = createRowList(year, month, dayList);

  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <Flex flexDirection="row" justifyContent="space-evenly">
        {weekdayNames.map((weekdayName) => (
          <Card
            width="100%"
            align="center"
            marginLeft="2px"
            marginRight="2px"
            color="black"
            variant="unstyled"
            key={uid()}
          >
            <Text>{weekdayName.toUpperCase()}</Text>
          </Card>
        ))}
      </Flex>
      {rowList.map((row) => (
        <Flex
          flexDirection="row"
          height="100%"
          justifyContent="space-evenly"
          key={uid()}
        >
          {row.map((squareObject) => (
            <Flex
              margin="2px"
              justifyContent="space-evenly"
              width="100%"
              key={uid()}
            >
              <Square
                squareObject={squareObject}
                dayList={dayList}
                setDayList={setDayList}
              />
            </Flex>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}

export default Calendar;
