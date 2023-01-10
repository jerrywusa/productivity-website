import Square from "./Square";
import Flexbox from "flexbox-react";

// month 0 == Jan, 1 == Feb, 2 == March, etc
function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

// 0 == sunday, 1 == Monday, etc
function getWeekdayNumber(year: number, month: number, day: number): number {
  return new Date(year, month, day).getDay();
}

// example: getWeekday(2023, 0, 1) == Sunday, because 2023 jan 01 is a Sunday
function getWeekdayName(year: number, month: number, day: number): string {
  let d = getWeekdayNumber(year, month, day);
  return weekdayNames[d];
}

// example: 0 == January, 1 == February, etc
function getMonthName(month: number): string {
  return monthNames[month];
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type CalendarProps = {
  year: number;
  month: number;
};

function Calendar({ year, month }: CalendarProps) {
  const startingWeekdayNumber = getWeekdayNumber(year, month, 1);
  const maxDayInMonth = getDaysInMonth(year, month);
  let dayList = [];
  for (let i = 0; i < startingWeekdayNumber; i++) {
    dayList.push(null);
  }
  for (let i = 1; i <= maxDayInMonth; i++) {
    dayList.push(i);
  }
  while (dayList.length < 35) {
    dayList.push(null);
  }

  let rowList = [];
  let dayListIdx = 0;
  for (let r = 0; r < 5; r++) {
    let row = [];
    for (let c = 0; c < 7; c++) {
      row.push(dayList[dayListIdx++]);
    }
    rowList.push(row);
  }

  return (
    <Flexbox flexDirection="column">
      {rowList.map((row) => (
        <Flexbox flexDirection="row">
          {row.map((day) => (
            <Flexbox margin="2px">
              <Square day={day} />
            </Flexbox>
          ))}
        </Flexbox>
      ))}
    </Flexbox>
  );
}

export default Calendar;
