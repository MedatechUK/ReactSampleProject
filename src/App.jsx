// use the message component inside the App component
//---------------listGroup-----------------
//import Message from "./Message";
/*
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Tokyo", "London", "Delhi", "paris"];
  // return <div><Message></Message></div>; // using message component inside app component
  // // Pasiing two paramtr to component ListGroup

  return (
    <div>
      <ListGroup items={items} cityheader="Cities"></ListGroup>
    </div>
  );
}

export default App; */
/*
//---------------children component-----------------
import Alert from "./components/Alert";
function App() {
  return (
    <div>
      <Alert>hello World</Alert>
    </div>
  );
}

export default App; */

/*
//-----------bootstrap button component

// Disply the alert message only when we click the button.
// To do this use the state variable in the app component that determine the visibility of the alert message.
// Render/Display the <Alert> component only if the visibility is true
// use state hook to define the state variable

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  //let btlbl = "My Button1";
  const btlbl = "Message Show";
  const btlb2 = "Message Hide";
  const [alertvisible, alertvisibility] = useState(false); // initilize the state variable as flase. So alert initially hidden.
  // Returns that value into array
  // render <alert> only if the alertvisible = true . DO the logiocal AND to perform that. {alertvisible && <Alert>My Alert</Alert>}
  // When we click the button make alertvisibility = true

  return (
    <div>
      {alertvisible && <Alert>My Alert</Alert>}
      <h1>
        <Button btnlabel={btlbl} btnClick={() => alertvisibility(true)} />
      </h1>

      <Button btnlabel={btlb2} btnClick={() => alertvisibility(true)} />
    </div>
  );
}

export default App; 
******/
/*
import Cmptable1 from "./components/Cmptable1";
import Hooks from "./components/Hooks";
import NavBAr from "./components/NavBar";

function App() {
  return (
    <div>
      <Hooks />
    </div>
  );
}

export default App; */
import CmpParent from "./components/CmpParent";
//import CmpSparent from "./components/CmpSparent";
const App = () => {
  return (
    <div>
      <CmpParent />
    </div>
  );
};

export default App;
