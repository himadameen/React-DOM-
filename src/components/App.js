import React from "react";
import Text from "./Text";

const App = () => {
  return (
    <>
      <div id="main">
        <Text
          name={
            "Now I can render any React component on any DOM node I want using ReactDOM.render"
          }
        />
      </div>
    </>
  );
};

export default App;
