import "./styles.css";
import React, { useState, useEffect } from "react";
import Pipe from "./Pipe";
import Query from "./Query";
import Input from "./Input";
import Options from "./Options";
import Data from "./Data";

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
  const [pipe, setPipe] = useState();

  return (
    <div className="container">
      <h1>
        /{">"}
        <Query value={query} />
        <Input value={input} />
        <Pipe value={pipe} />
        <Options value={options} />
      </h1>
    </div>
  );

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
        acceptKey(key);
    }
  }

  function handleKeyDown(event) {
    // console.log("A key was pressed: ", event);
    keySwitcher(event.key);
  }

  function showListInfos() {
    const items = getListInfos();
    setOptions(items);
  }

  function getListInfos() {
    return Object.keys(Data);
  }

  function showListFields() {
    const items = getListFields(info);
    setOptions(items);
  }

  function getListFields(info) {
    return Object.keys(Data[info]);
  }

  function showListValues() {
    const items = getListValues(info, field);
    setOptions(items);
  }
  function getListValues(info, field) {
    return Object.keys(Data[info][field]);
  }

  function doBackspace() {}

  function doDelete() {}

  function moveLeft() {}

  function moveRight() {}

  function acceptItem() {}

  function acceptKey(key) {
    if (key.length == 1) {
      // console.log("input", input);
      // const newInput = input != undefined ? input + key : key;
      // console.log("newInput", newInput);
      setInput((input) => (input != undefined ? input + key : key));
    }
  }
}

export default App;
