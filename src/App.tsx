import React from "react";
import Datepicker from "./Datepicker";
import "./App.css";
import ColorModeSwitch from "./ColorModeSwitch";

function App() {
  const myDate = new Date();
  return (
    <div className="App">
      <ColorModeSwitch />
      <Datepicker
        selectedDate={myDate}
        onChange={(d) => console.log(d)}
        isClearable={true}
      />
    </div>
  );
}

export default App;
