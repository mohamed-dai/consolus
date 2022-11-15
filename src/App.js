import React, { useState, useEffect } from "react";

const handleKeyDown = (event) => {
  console.log("A key was pressed: ", event.key);
  keySwitcher(event.key);
};

const keySwitcher = (key) => {
  switch (key) {
    case "@":
      showListInfos();
      break;
    case "?":
      showListFields();
      break;
    case "=":
      showListValues();
      break;
    case "Backspace":
      doBackspace();
      break;
    case "Delete":
      doDelete();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "Enter":
      acceptItem();
      break;
  }
};

function App() {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1>Welcome to the Keydown Listening Component</h1>
    </div>
  );
}

export default App;
