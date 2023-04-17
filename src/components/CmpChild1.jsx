import { Button } from "@material-ui/core";

/*
inputmessage = inputdata
passToParent = outputdata
 */
let count = 1;
const CmpChild1 = ({ dataToChild1, OutdataParent }) => {
  const handleSubmit = () => {
    {
      if (count % 2 == 0) {
        dataToChild1.ItemNO = count;
        dataToChild1.Desc = "Rice";
      } else {
        dataToChild1.ItemNO = count;
        dataToChild1.Desc = "Oil";
      }
      count = count + 1;
    }
    OutdataParent(dataToChild1); // return the modified value to Parent.
  };

  return (
    <div>
      <div>Data in Child1 from Parent</div>
      <div>Item Number: {dataToChild1.ItemNO} </div>
      <div>Item Desc: {dataToChild1.Desc} </div>
      <button onClick={handleSubmit}>Modify input data-Return to parent</button>
    </div>
  );
};

export default CmpChild1;
