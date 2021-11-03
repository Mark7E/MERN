import "./App.css";
import Box from "./components/Box";
import BoxColor from "./components/BoxColor";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(["red", "blue"]);

  const changeColor = (newColor) => {
    const newColArr = [...color, newColor]
    setColor(newColArr);
    console.log(newColArr);
  };
  return (
    <div>
      <div className="center App">
        <Box changeColor={changeColor} />
        </div>
        <div className="App">
          <BoxColor color={color} />
        
      </div>
    </div>
  );
}

export default App;
