// Single data passing inbetween the component
// from parent --> child1--Return child1 --> parent-->child2
import { useState } from "react";
import CmpSchild1 from "./CmpSchild1";
import CmpSchild2 from "./CmpSchild2";

const CmpSparent = () => {
  const message = {
    ItemNO: 1234,
    Desc: "Sugar",
  };

  const [ItemInfo, setItemInfo] = useState([]);

  const childData = (message) => {
    // Return modified message values from child1.
    /*
    Pass single record to Child2. Always replace the old value in Child 2.
    This is same as ItemInfo = message.   */
    setItemInfo(message);
  };
  // Pass value to child1
  // dataToChild1 = input data to child1
  // OutdataParent = Output data from child1
  return (
    <div>
      <div>Initial data in Parent</div>
      <div>{message.ItemNO}</div>
      <div>{message.Desc}</div>
      <CmpSchild1 dataToChild1={message} OutdataParent={childData} />
      <div>Data in Parent after modification from Child1</div>
      <div>{ItemInfo.ItemNO}</div>
      <div>{ItemInfo.Desc}</div>
      {<CmpSchild2 dataToChild2={ItemInfo} />}
    </div>
  );
};

export default CmpSparent;
//inputmessage={message}
