import "./style.scss";
import { getDetail } from "utils/detail";
import Dropdown from "react-bootstrap/Dropdown";
import { Status } from "components";
import { useDispatch } from "react-redux";
import { markAsCanceled, markAsCompleted } from "actions/order";

const SellerOrderItem = ({ order }) => {
  const dispatch = useDispatch();
  return (
    <tr className="seller-order-item">
      <td>{order._id}</td>
      <td>{new Date(order.date).toString().substring(0, 15)}</td>
      <td>{getDetail(order)}</td>
      <td>{order.total}</td>
      <td>
        <Status status={order.state} />
      </td>
      <td>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Actions
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                dispatch(markAsCompleted(order._id));
              }}
            >
              <span
                className="color-picker__item m-0"
                style={{
                  backgroundColor: "#82bf11",
                  width: "10px",
                  height: "10px",
                }}
              ></span>{" "}
              Mark as Completed
            </Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(markAsCanceled(order._id))}>
              <span
                className="color-picker__item m-0"
                style={{
                  backgroundColor: "#f05d62",
                  width: "10px",
                  height: "10px",
                }}
              ></span>{" "}
              Mark as Canceled
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};
export default SellerOrderItem;
