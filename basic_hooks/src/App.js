
import React, { useState } from "react";

// Import all hook demos
import UseStateDemo from "./UseStateDemo";
import UseEffectDemo from "./UseEffectDemo";
import { UseContextDemo, ThemeContext } from "./UseContextDemo";
import UseRefDemo from "./UseRefDemo";
import UseMemoDemo from "./UseMemoDemo";
import UseCallbackDemo from "./UseCallbackDemo";
import UseReducerDemo from "./UseReducerDemo";
import UseLayoutEffectDemo from "./UseLayoutEffectDemo";
import UseImperativeHandleDemo from "./UseImperativeHandleDemo";
import UseDebugValueDemo from "./UseDebugValueDemo";

function App() {
  const [active, setActive] = useState("useState");

  // Map demo names to components
  const demos = {
    useState: <UseStateDemo />,
    useEffect: <UseEffectDemo />,
    useContext: (
      <ThemeContext.Provider value="dark">
        <UseContextDemo />
      </ThemeContext.Provider>
    ),
    useRef: <UseRefDemo />,
    useMemo: <UseMemoDemo />,
    useCallback: <UseCallbackDemo />,
    useReducer: <UseReducerDemo />,
    useLayoutEffect: <UseLayoutEffectDemo />,
    useImperativeHandle: <UseImperativeHandleDemo />,
    useDebugValue: <UseDebugValueDemo />,
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>React Hooks Demo</h1>

      {/* Navigation Menu */}
      <nav style={{ marginBottom: 20 }}>
        {Object.keys(demos).map((hook) => (
          <button
            key={hook}
            onClick={() => setActive(hook)}
            style={{
              margin: "5px",
              padding: "8px 12px",
              backgroundColor: active === hook ? "#007BFF" : "#f0f0f0",
              color: active === hook ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {hook}
          </button>
        ))}
      </nav>

      {/* Render Active Demo */}
      <div style={{ border: "1px solid #ddd", padding: 20, borderRadius: 10 }}>
        {demos[active]}
      </div>
    </div>
  );
}

export default App;
