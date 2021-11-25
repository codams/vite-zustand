import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
}));
function App() {
  const count = useStore((state) => state.count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={useStore((state) => state.increaseCount)}
          >
            count is: {count}
          </button>
        </p>
        <button type="button" onClick={useStore((state) => state.resetCount)}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
