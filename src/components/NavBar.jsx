import Cmptable1 from "./Cmptable1";
function NavBAr() {
  return (
    <nav className="nav nav-pills nav-justified">
      <a className="nav-link active" aria-current="page" href="./CmpTable1">
        Table1
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        Table2
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        Table3
      </a>
      <a className="nav-link active" aria-current="page" href="#">
        Table4
      </a>
    </nav>
  );
}

export default NavBAr;
