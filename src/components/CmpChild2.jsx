const CmpChild2 = ({ dataToChild2 }) => {
  console.log("ChildData:", dataToChild2);
  return (
    <>
      <table border="1">
        <tr>
          <td>Disply data in Child2 whcih modified from Child1</td>
        </tr>
        <tr>
          <td>ItemNumber</td>
          <td>Item Description</td>
        </tr>
        {dataToChild2.map((item, index) => {
          return (
            <tr>
              <td>{item.ItemNO}</td>
              <td>{item.Desc}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default CmpChild2;

/*
Disply single record
 <tr>
<td>{dataToChild2.ItemNO}</td>
<td>{dataToChild2.Desc}</td>
 </tr>
*/
