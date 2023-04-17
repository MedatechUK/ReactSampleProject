function Hooks() {
  let a = 5;
  let b = 10;
  let c = a + b;
  const userifo = {
    empName: "Jelbin",
    empId: 1001,
    empPlace: "ABCD",
  };
  /*
  function checkval() {
    // return c == 10 ? "OK" : "pNOK";
   // alert(c + "check123");
    console.log(c + "check123");
  } */
  let checkval = function () {
    console.log(c + "check1234");
  };
  /* function fnclick() {
    return alert("button clicked");
  } */
  const fnclick = () => {
    alert("button clicked");
  };
  return (
    <>
      <div>Item value</div>
      <h1>{checkval()}</h1>
      <h1>{userifo.empId}</h1>
      <h1>{userifo.empName}</h1>
      <h1>{userifo.empPlace}</h1>
      <button onClick={fnclick}>Calcualte</button>
    </>
  );
}

export default Hooks;
//
