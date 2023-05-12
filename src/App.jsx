import { useState } from "react";
import reactLogo from "./assets/react.svg";
import theme from "./theme/theme";
import NavBar from "./components/NavBar";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} />
          <Route index path="/" element={<Pokemons />} />
          {/* <Route path="/discussions" element={<Discussions />} />
          <Route
            path="/discussions/:idDiscussion"
            element={<DiscussionDetail />}
          /> */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
