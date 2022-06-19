import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

function Header() {
  const [setTheme, colorTheme] = useDarkMode();
  const [light, setLight] = useState(true);
  const handleClick = () => {
    setTheme(colorTheme);
    setLight(!light);
  };

  return (
    <div className=" flex flex-row items-center justify-between pl-2 pr-4 border-gray-500 border-b-2 border-solid py-5  dark:bg-slate-800">
      <div className="text-3xl  font-bold font-sans dark:text-white">
        <Link to="/">FAKE STORE</Link>
      </div>
      <div className="" onClick={handleClick}>
        {light ? <BsMoonFill color="grey" className="h-5 w-5"/> : <BsSunFill color="grey" className="h-5 w-5" />}
      </div>
    </div>
  );
}

export default Header;
