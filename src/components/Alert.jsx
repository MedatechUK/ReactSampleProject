/*-----------------------------------------passing children to component--------------------------------------------------------*/
//component accept childern
// render classname from bootstrap . Classname  = alert and alert-primary

// pass the input paramater to componnet
//Using the children prop, passing the children to component
function Alert({ children }) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Alert;
