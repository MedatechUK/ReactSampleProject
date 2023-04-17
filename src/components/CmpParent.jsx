import { useState } from "react";
import CmpChild1 from "./CmpChild1";
import CmpChild2 from "./CmpChild2";

const CmpParent = () => {
  const message = {
    ItemNO: 1234,
    Desc: "Sugar",
  };

  const [ItemInfo, setItemInfo] = useState([]);

  const childData = (message) => {
    // Return modified message values from child1.
    /* Append the new record with old record and display in Child2*/
    // if we did not use ..., then it will display only the recent selected value.
    setItemInfo((ItemInfo) => [...ItemInfo, message]);
    console.log("olddata", ...ItemInfo);
  };

  // Pass value to child1
  // dataToChild1 = input data to child1
  // OutdataParent = Output data from child1
  return (
    <div>
      <div>Initial data in Parent</div>
      <div>{message.ItemNO}</div>
      <div>{message.Desc}</div>
      <CmpChild1 dataToChild1={message} OutdataParent={childData} />
      {/*<div>Data in Parent after modification from Child1</div>
      <div>{ItemInfo.ItemNO}</div>
      <div>{ItemInfo.Desc}</div> */}
      {<CmpChild2 dataToChild2={ItemInfo} />}
    </div>
  );
};

export default CmpParent;
//inputmessage={message}
