import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App bg-[#1A232E] h-screen py-6 relative sm:px-16 text-white overflow-hidden text-wrap flex flex-col justify-between align-middle px-12">
      <Main />
    </div>
  );
}
