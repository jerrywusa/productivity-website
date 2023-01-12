export const monthNames = [
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
export const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// month 0 == Jan, 1 == Feb, 2 == March, etc
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

// 0 == sunday, 1 == Monday, etc
export function getWeekdayNumber(
  year: number,
  month: number,
  day: number
): number {
  return new Date(year, month, day).getDay();
}

// example: getWeekday(2023, 0, 1) == Sunday, because 2023 jan 01 is a Sunday
export function getWeekdayName(
  year: number,
  month: number,
  day: number
): string {
  let d = getWeekdayNumber(year, month, day);
  return weekdayNames[d];
}

// example: 0 == January, 1 == February, etc
export function getMonthName(month: number): string {
  return monthNames[month];
}
