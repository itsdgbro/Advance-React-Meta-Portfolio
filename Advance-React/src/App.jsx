import "./App.css";
import DessertsList from "./DesertList";
import Keys from "./Keys";
import Receipe from "./Challanges/Receipe";
import ControlledComponent from "./Controlled Component/ControlledComponent";
import FeedbackForm from "./Controlled Component/FeedackForm";
import Signup from "./Forms/Signup";
import { useEffect } from "react";


function App() {
  
  return (
    <div className="App">
      <h1>Advance React</h1>
      {/* <DessertsList/> */}
      {/* <Keys/> */}
      {/* <Receipe/> */}
      {/* {ControlledComponent} */}
      {/* <FeedbackForm/> */}
      <Signup/>
    </div>
  );
}

export default App;
