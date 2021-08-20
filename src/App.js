import React, { useEffect } from "react";
import Registere from "./registered";
import Login from "./login";

import "./App.css";

function App() {
  useEffect(() => {
    console.log(123);
  }, []);
  return (
    <div className="App">
      <Login></Login>
      <header className="App-header">
        <Registere></Registere>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
