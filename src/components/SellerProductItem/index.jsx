import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { SellerProductDetail } from "components";
import { removeProduct } from "actions/product";

const SellerProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr className="seller-product-item">
      <td>
        <SellerProductDetail product={product} />
      </td>
      <td>{product.quantity}</td>
      <td>{new Date(product.date).toString().substring(0, 15)}</td>
      <td>{product.price}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => {}}>
              <img src="/images/edit.svg" alt="edit_icon" /> Edit
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                dispatch(removeProduct(product._id));
              }}
            >
              <img src="/images/remove.svg" alt="remove_icon" /> Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};
export default SellerProductItem;
