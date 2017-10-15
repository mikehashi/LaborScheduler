import React from "react";
import Employees from "./pages/Books";
import Nav from "./components/Nav";

// const empSeed = [
//   {
//     name: "John Smith",
//     title: "AMT",
//     empNum: 12345,
//     crew: "BAY 1 1ST"
//   },
//   {
//     name: "John Smith",
//     title: "AMT",
//     empNum: 444445,
//     crew: "BAY 1 1ST"
//   }
// ];

const App = () => (
  <div>
    <Nav />
    <Employees/>
  </div>
);

export default App;
