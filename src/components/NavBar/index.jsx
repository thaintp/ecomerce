import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = () => {
  return (
    <div className="Navbar">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Men
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/products/men/all/1">Home</Dropdown.Item>
          <Dropdown.Item href="/products/men/all/1">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Ladies
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/products/ladies/all/1">Home</Dropdown.Item>
          <Dropdown.Item href="/products/ladies/all/1">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Girls
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/products/girls/all/1">Home</Dropdown.Item>
          <Dropdown.Item href="/products/girls/all/1">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Boys
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/products/boys/all/1">Home</Dropdown.Item>
          <Dropdown.Item href="/products/boys/all/1">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NavBar;
