import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/themeSlice";
// import { LightModeContext } from "../hooks/useDarkMode";

function Header() {
  // const { lightMode, dispatch } = useContext(LightModeContext);
  // const handleClick = () => {
  //   dispatch({ type: "TOGGLE" });
  //   //setTheme(colorTheme);
  // };

  const theme = useSelector((state) => state.setTheme.theme);
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(theme);
    console.log("here");
    dispatch(setTheme(theme));
  };

  return (
    <div
      className={`flex flex-row items-center justify-between pl-2 pr-4 border-gray-500 border-b-2 border-solid py-5 ${
        theme !== "light" && "bg-slate-800"
      }`}
    >
      <div
        className={`text-3xl  font-bold font-sans ${
          theme !== "light" && "text-white"
        }`}
      >
        <Link to="/">FAKE STORE</Link>
      </div>
      <div className="" onClick={handleClick}>
        {theme === "light" ? (
          <BsMoonFill color="grey" className="h-5 w-5" />
        ) : (
          <BsSunFill color="grey" className="h-5 w-5" />
        )}
      </div>
    </div>
  );
}

export default Header;
