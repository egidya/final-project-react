// TODO: answer here
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Center, Heading } from "@chakra-ui/react";
import Home from "./Home";
import Detail from "./Detail";


const App = () => {
  const MyRouter = () => (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/card/:id" element={<Detail />} />
    <Route path="*"element={
        <Center>
          <Heading>404 Page not found!</Heading>
        </Center>
      }
    />
  </Routes>
  ); // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
