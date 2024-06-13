import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  const [calVal, setCalVal] = useState("");

  // const onButtonClick = (event) => {
  //   console.log(event);
  // };

  const onButtonClick = (btnName) => {
    // console.log(btnName);
    if (btnName === "C") {
      setCalVal("");
    } else if (btnName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + btnName;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
