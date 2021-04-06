import styles from './index.module.scss';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Men
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/home">Home</Dropdown.Item>
          <Dropdown.Item href="/products">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
        Ladies
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/home">Home</Dropdown.Item>
          <Dropdown.Item href="/products">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
        Girls
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/home">Home</Dropdown.Item>
          <Dropdown.Item href="/products">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
        Boys
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/home">Home</Dropdown.Item>
          <Dropdown.Item href="/products">Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default NavBar;