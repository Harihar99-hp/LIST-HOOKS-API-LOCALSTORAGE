import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

function UseContextDemo() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <h2>useContext Demo</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Wrap with provider in App.js
export { UseContextDemo, ThemeContext };
