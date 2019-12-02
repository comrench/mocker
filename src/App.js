import React from "react";
import "./App.css";
import Panel from "./components/panel/Panel";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <hr /> */}
      <table>
        <tr>
          <td className="panelCol">
            <Panel />
          </td>
          <td className="verticalLine"></td>
          <td className="contentCol">
            <Content />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
