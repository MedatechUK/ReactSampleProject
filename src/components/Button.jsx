//Add button and make button label dynamically

function Button({ btnlabel, btnClick }) {
  return (
    <button className="btn btn-primary" onClick={btnClick}>
      {btnlabel}
    </button>
  );
}

export default Button;

/*
function fonClick() {
    retrun(<h1>OKOK</h1>);
  }
  */
