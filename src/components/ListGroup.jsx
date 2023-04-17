/*
-----------------------------Fragment--------------------------------------------

One component cannot return more than one html element. So resolve this issue react using the feature called <Fragment>
One component return multiple html elements without addding any extra component in the DOM.
<h1></h1>
<ul></ul1>
So to resolve this issue we import fragment
 <Fragment>
<h1></h1>
<ul></ul1></Fragment>
or
 <>
<h1></h1>
<ul></ul1></>
-----------------------------
import { Fragment } from "react";
function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Delhi", "paris"];

  items = [1];

   // turnery operation Instead of if condition
  function getMessage() {
    return items.length === 0 ? <p>Not Found</p> : null;
  }

  return (
    <Fragment>
      <h1>LIST </h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}


-----------------------Rendering list/Conditional rendering-----------------------------------------

/*
points to remeober
--> Rendering list menas dynamically display the list value using map() function.
--> Conditional rendering means - dynamically disply differnt content to user based on conditions.

--JSX cannot able to use for loop,same like in java script . So using map() function
--> for if condition use turnery operator in java script
--give {} to add value dynamically. 
--in JSX we can only use html element or other components

-- to render content dynamically react using multiple way
    -turnery operator
    -

*/

/*
  <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
*/

/*
function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Delhi", "paris"];

  items = [1];

   // turnery operation Instead of if condition
  function getMessage() {
    return items.length === 0 ? <p>Not Found</p> : null;
  }

  return (
    <>
      <h1>LIST </h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // Export data from component

*/

/*
// ---------------Handling events---------------------------

// Adding differnt events, onclick,onselect etc

function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Delhi", "paris"];

  // turnery operation Instead of if condition
  function getMessage() {
    return items.length === 0 ? <p>Not Found</p> : null;
  }

  return (
    <>
      <h1>LIST </h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} onClick={() => console.log(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // Export data from component
-----------------------------------Managing states---------------------------------------------------------------*/
/*
// Managing componenets  -----
// when we selct item that should hightlight
// state is a built in react object that is used to contain data or information about the component

//let selectindex = 0;
  //local variable . This will not change always.
  //So to chage the data and value in run time need to use built in function useState
  // Hook -> Hook is a function that allows us to use the buit in features in react. value will change each time.
  //const [selectedIndex, setselectedIndex] = useState(-1);

  //stateHook (useState)- tell to react that this component has data or state that will change all the time.

import { useState } from "react";
function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Delhi", "paris"];

  return (
    <>
      <h1>LIST </h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // Export data from component
------------------------------------- Passing data via Props------------------------------------------------------------- 
// Passing data via Props-----
// props is a property. Using props we pass the value dynamically  to our components
// Make the components in reusable
// props input the value to the components
// just call the function and pass the arguments

// eg: pass the items and header as function paramater
// pass the value into  ListGroup component from App component.

import { useState } from "react";

function ListGroup({ items, cityheader }) {

  return (
    <>
      <h1>{cityheader}</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // Export data from component
*/
/*-----------------------------------------Passing function via via Props--------------------------------------------------------- 

// Passing function via via Props-----
// props is a property. Using props we pass the value dynamically  to our components
// Make the components in reusable
// props input the value to the components
// just call the function and pass the arguments

// eg: pass one fucntion as property of another function. Something should happen after item selected. eg. page load or something
// pass the value into  ListGroup component

import { useState } from "react";

function ListGroup({ items, cityheader, alertfunction }) {

  return (
    <>
      <h1>{cityheader}</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
              alertfunction;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup; // Export data from component  */
/*-----------------------------------------state and Props---------------------------------------------------------*/
//props                                                   state
// Pros = property
//input/Argumrnts passed in to a component                 Internal data in the component/managed by component
// immutable -not able change to value in props            mutable = data can be change all the time.
// like function arumrnts                                  like local variable inside function
// if any chages happed in both props and state react will re render and update the DOM accordingly
