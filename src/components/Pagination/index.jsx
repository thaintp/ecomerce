import "./style.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const Pagination = (props) => {
  return (
    <div className="pagination">
      <Button variant="light">
        <FaAngleLeft />
      </Button>
      <span>
        {props.current}/{props.sum}
      </span>
      <Button variant="light">
        <FaAngleRight />
      </Button>
    </div>
  );
};

export default Pagination;
