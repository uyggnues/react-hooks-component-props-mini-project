import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

// props is short for properties
// props refers to passing information between comonents

function App() {
  const myVar = "some value"

  return (
    <div className="App">
      <Header myInfo={myVar} myKey="value"/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
