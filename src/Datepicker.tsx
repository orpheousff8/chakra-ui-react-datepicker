import React, { HTMLAttributes } from "react";
import ReactDatePicker from "react-datepicker";
import { useColorMode } from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => any;
  selectedDate: Date | undefined;
  showPopperArrow?: boolean;
}

const Datepicker = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
}:
Props & HTMLAttributes<HTMLElement>) => {
  const isLight = useColorMode().colorMode === "light"; //you can check what theme you are using right now however you want
  return (
    // if you don't want to use chakra's colors or you just want to use the original ones,
    // set className to "light-theme-original" ↓↓↓↓
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        isClearable={isClearable}
        showPopperArrow={showPopperArrow}
        className="react-datapicker__input-text" //input is white by default and there is no already defined class for it so I created a new one
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd MM yyyy HH:mm"
      />
    </div>
  );
};

export default Datepicker;
