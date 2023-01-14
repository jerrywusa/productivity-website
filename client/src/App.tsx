import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { SquareObject, SquareObjectColor } from "./types/Types";
import { getDaysInMonth } from "./utils/Utils";
import { useState } from "react";
import CalendarPage from "./components/Calendar/CalendarPage";

function createDayList(year: number, month: number) {
  const maxDayInMonth = getDaysInMonth(year, month);
  let dayList: Array<SquareObject> = [];
  for (let i = 1; i <= maxDayInMonth; i++) {
    dayList.push({
      dayNumber: i,
      color: SquareObjectColor.blackAlpha,
    });
  }
  return dayList;
}

function App() {
  let date = new Date();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();
  const [dayList, setDayList] = useState<Array<SquareObject>>(
    createDayList(currYear, currMonth)
  );

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CalendarPage
                year={currYear}
                month={currMonth}
                dayList={dayList}
                setDayList={setDayList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
