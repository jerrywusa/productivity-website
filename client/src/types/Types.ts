export type SquareObject = {
  dayNumber: number;
  color: SquareObjectColor;
};

export enum SquareObjectColor {
  blackAlpha = "blackAlpha",
  red = "red",
  green = "green",
}

export type CalendarYearMonthColor = {
  yearColor: string;
  monthColor: string;
};
