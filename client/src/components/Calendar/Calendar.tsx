import Square from "./Square";
import Flexbox from "flexbox-react";
import { Card, Text } from "@chakra-ui/react";
import { SquareObject } from "../../types/ComponentTypes";
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
    <Flexbox flexDirection="column">
      <Flexbox flexDirection="row">
        {weekdayNames.map((weekdayName) => (
          <Card
            width={150}
            align="center"
            margin="2px"
            color="black"
            variant="unstyled"
          >
            <Text>{weekdayName}</Text>
          </Card>
        ))}
      </Flexbox>
      {rowList.map((row) => (
        <Flexbox flexDirection="row">
          {row.map((squareObject) => (
            <Flexbox margin="2px">
              <Square
                key={uid()}
                squareObject={squareObject}
                dayList={dayList}
                setDayList={setDayList}
              />
            </Flexbox>
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
}

export default Calendar;
