import { CalendarYearMonthColor, SquareObject } from "../../types/Types";
import Calendar from "./Calendar";
import { getMonthName } from "../../utils/Utils";
import { Heading, Highlight, Grid, GridItem, Button } from "@chakra-ui/react";

const yearMonthColors: Array<CalendarYearMonthColor> = [
  { yearColor: "yellow.100", monthColor: "red.100" },
  { yearColor: "red.100", monthColor: "red.300" }, // feb
  { yearColor: "gray.100", monthColor: "green.100" }, // mar
  { yearColor: "purple.100", monthColor: "yellow.100" }, // apr
  { yearColor: "blue.100", monthColor: "pink.100" },
  { yearColor: "gray.100", monthColor: "red.100" }, // jun
  { yearColor: "blue.100", monthColor: "yellow.100" },
  { yearColor: "green.100", monthColor: "blue.100" },
  { yearColor: "yellow.100", monthColor: "blue.100" },
  { yearColor: "gray.100", monthColor: "blue.100" }, // oct
  { yearColor: "orange.100", monthColor: "orange.300" }, // nov
  { yearColor: "red.100", monthColor: "blue.100" },
];

type CalendarProps = {
  year: number;
  setYear: (a: number) => void;
  month: number;
  setMonth: (a: number) => void;
  dayList: Array<SquareObject>;
  setDayList: (a: Array<SquareObject>) => void;
};

function CalendarPage({
  year,
  setYear,
  month,
  setMonth,
  dayList,
  setDayList,
}: CalendarProps) {
  return (
    <Grid
      templateAreas={`"cal rightPanel"`}
      gridTemplateColumns={"80% 20%"}
      gridTemplateRows={"100%"}
      h="100vh"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="white.100" area="cal" padding="1">
        <Calendar
          year={year}
          month={month}
          dayList={dayList}
          setDayList={setDayList}
        />
      </GridItem>
      <GridItem bg="gray.300" area="rightPanel" padding="10">
        <Heading marginBottom="20px" textAlign="end">
          <Highlight
            query={year.toString()}
            styles={{
              px: "3",
              py: "2",
              rounded: "md",
              bg: yearMonthColors[month].yearColor,
            }}
          >
            {year.toString()}
          </Highlight>
        </Heading>
        <Heading textAlign="end">
          <Highlight
            query={getMonthName(month)}
            styles={{
              px: "3",
              py: "2",
              rounded: "md",
              bg: yearMonthColors[month].monthColor,
            }}
          >
            {getMonthName(month)}
          </Highlight>
        </Heading>
        <Button
          onClick={() => {
            if (month == 0) {
              setYear(year - 1);
              setMonth(11);
            } else {
              setMonth(month - 1);
            }
          }}
        />
        <Button
          onClick={() => {
            if (month == 11) {
              setYear(year + 1);
              setMonth(0);
            } else {
              setMonth(month + 1);
            }
          }}
        />
      </GridItem>
    </Grid>
  );
}

export default CalendarPage;
