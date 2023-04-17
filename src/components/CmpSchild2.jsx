const CmpSchild2 = ({ dataToChild2 }) => {
  console.log("Mitem:", dataToChild2.ItemNO);
  console.log("MDesc:", dataToChild2.Desc);
  return (
    <>
      <table>
        <tr>
          <td>Disply data in Child2 whcih modified from Child1</td>
        </tr>
        <tr>
          <td>ItemNumber</td>
          <td>Item Description</td>
        </tr>
        <tr>
          <td>{dataToChild2.ItemNO}</td>
          <td>{dataToChild2.Desc}</td>
        </tr>
      </table>
    </>
  );
};

export default CmpSchild2;
