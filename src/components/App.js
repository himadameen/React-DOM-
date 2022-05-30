import React from "react";

const App = () => {
  const text =
    "Now I can render any React component on any DOM node I want using ReactDOM.render";

  return (
    <>
      <div id="main">
        <p>{text}</p>
      </div>
    </>
  );
};

export default App;
