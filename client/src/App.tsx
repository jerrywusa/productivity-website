import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  let date = new Date();
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Calendar year={date.getFullYear()} month={date.getMonth()} />
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
