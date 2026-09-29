import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Card() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
      <div className="min-h-screen flex justify-center items-center gap-5">
        <div className={`w-100 h-100 ${
            theme === "blue" ? "bg-blue-800" : "bg-red-800"
        }`}></div>

        <button onClick={() => {setTheme(theme === 'blue' ? "red" : "blue")}}
        className="p-1 border rounded-full bg-blue-300">Click</button>
      </div>
    </>
  );
}

export default Card;
