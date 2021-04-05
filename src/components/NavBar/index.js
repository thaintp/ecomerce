import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={'/'}>Home page</Link>
        </li>
        <li>
          <Link to={`/products`}>
            Products
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavBar;