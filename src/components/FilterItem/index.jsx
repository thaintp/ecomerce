import "./style.scss";
import Accordion from "react-bootstrap/Accordion";
import { FilterItemTag } from "components";

const FilterItem = (props) => {
  return (
    <div className="FilterItem">
      <Accordion.Toggle eventKey={props.eventKey}>
        {props.title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey}>
        <div className="FilterItem__tags">
          {props.list.map((item) => (
            <FilterItemTag item={item} key={item} />
          ))}
        </div>
      </Accordion.Collapse>
    </div>
  );
};

export default FilterItem;
