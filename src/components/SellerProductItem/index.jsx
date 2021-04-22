import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { CLICK_PRODUCT } from "actions/types";
import { SellerProductDetail } from "components";
import { removeProduct } from "actions/product";
import { Link } from "react-router-dom";

const SellerProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr className="seller-product-item">
      <td>
        <SellerProductDetail product={product} />
      </td>
      <td>
        {product.sold} / {product.quantity}
      </td>
      <td>{new Date(product.date).toString().substring(0, 15)}</td>
      <td>{product.profit.toFixed(2)}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link
              to="products/edit"
              onClick={() => {
                dispatch({
                  type: CLICK_PRODUCT,
                  payload: product,
                });
              }}
              style={{
                textDecoration: "none",
                color: "#000000",
              }}
              className="dropdown-item"
            >
              <img src="/images/edit.svg" alt="edit_icon" /> Edit
            </Link>
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
