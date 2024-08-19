import React from "react";
import ReactDOM from "react-dom/client"; 
import Heading from "./Heading";       // The extension .jsx is optional



const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <React.StrictMode>
    <div>
      <Heading />     
      
    </div>
  </React.StrictMode>
); 

export default App; 