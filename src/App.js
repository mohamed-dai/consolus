import "./styles.css";
import React, { useState, useEffect } from "react";
import Query from "./Query";
import Input from "./Input";
import Options from "./Options";

function App() {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [info, setInfo] = useState();
  const [field, setField] = useState();
  const [value, setValue] = useState();
  const [options, setOptions] = useState();
  const [input, setInput] = useState();
  const [query, setQuery] = useState();

  function handleKeyDown(event) {
    console.log("A key was pressed: ", event);
    keySwitcher(event.key);
  }

  function showListInfos() {
    const items = getListInfos();
    setOptions(items);
  }

  function getListInfos() {
    return [];
  }

  function showListFields() {
    const items = getListFields(info);
    setOptions(items);
  }

  function getListFields(info) {
    return [];
  }

  function showListValues() {
    const items = getListValues(info, field);
    setOptions(items);
  }
  function getListValues(info, field) {
    return [];
  }

  function doBackspace() {}

  function doDelete() {}

  function moveLeft() {}

  function moveRight() {}

  function acceptItem() {}

  function acceptKey() {}

  function keySwitcher(key) {
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
      case " ":
        break;
      default:
        acceptKey();
    }
  }

  return (
    <div className="container">
      <h1>
        /{">"} <Query value={query} />
        <Input value={input} />
        <Options value={options} />
      </h1>
    </div>
  );
}

export default App;
