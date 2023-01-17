import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { SquareObject, SquareObjectColor } from "./types/Types";
import { getDaysInMonth } from "./utils/Utils";
import { useState } from "react";
import CalendarPage from "./components/Calendar/CalendarPage";
import React from "react";

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
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [dayList, setDayList] = useState<Array<SquareObject>>(
    createDayList(year, month)
  );

  // const [message, setMessage] = useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:3001/api")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMessage(data.message);
  //     });
  // }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CalendarPage
                year={year}
                setYear={setYear}
                month={month}
                setMonth={setMonth}
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
