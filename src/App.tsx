import React from "react";

import { Root } from "./components/Root/Root";
import { Registration } from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Root>
        <Registration></Registration>
      </Root>
    </div>
  );
}

export default App;
