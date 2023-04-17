// new component
function Message() {
  // javascript xml=JSX
  // JSX helps to create dynamic values such as condition,loops,variables,fucntin etc
  const name = "jelbin";
  if (name == "jelbin") return <h1> Hello {name}</h1>;
  else return <h1> Wrong name</h1>;
}

export default Message;
