import "./styles.css";
import React, { useState, useEffect } from "react";
import Pipe from "./Pipe";
import Query from "./Query";
import Input from "./Input";
import Options from "./Options";
import getData from "./Data";

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
  const [allOptions, setAllOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState();
  const [query, setQuery] = useState();
  const [pipe, setPipe] = useState();
  const Data = getData();

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
    acceptKey(key);
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
        // filterOptions();
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
      // case " ":
      // break;
      // default:
      //   filterOptions();
    }
  }

  function handleKeyDown(event) {
    console.log("A key was pressed: ", event.key);
    keySwitcher(event.key);
  }

  function showListInfos() {
    const items = getListInfos();
    console.log("showListInfos", items);
    setOptions(items);
    setAllOptions(items);
  }

  function getListInfos() {
    console.log("Data", Data);
    return Object.keys(Data);
  }

  function showListFields() {
    const items = getListFields(info);
    setOptions(items);
    setAllOptions(items);
  }

  function getListFields(info) {
    return Object.keys(Data[info]);
  }

  function showListValues() {
    const items = getListValues(info, field);
    setOptions(items);
    setAllOptions(items);
  }
  function getListValues(info, field) {
    return Object.keys(Data[info][field]);
  }

  function doBackspace() {
    setInput((input) => {
      const newInput = input.substring(0, input.length - 1);
      filterOptions(newInput);
      return newInput;
    });
  }

  function doDelete() {}

  function moveLeft() {}

  function moveRight() {}

  function acceptItem() {}

  function acceptKey(key) {
    if (key.length == 1) {
      setInput((input) => {
        const newInput = input != undefined ? input + key : key;
        const regexp = /^[a-z0-9]+$/i;
        const match = key.match(regexp);
        if (match != null) {
          filterOptions(newInput);
        }
        return newInput;
      });
    }
  }

  function filterOptions(input) {
    // setInput((input) => {

    setAllOptions((allOptions) => {
      // console.log("allOptions", allOptions);
      setOptions((options) =>
        allOptions.filter(function (option) {
          return option.startsWith(input.substring(1));
        })
      );
      return allOptions;
    });

    // return input;
    // });
  }
}

export default App;
