import "./style.scss";
import { FilterItem } from "components";
import Accordion from "react-bootstrap/Accordion";

const Filter = () => {
  return (
    <div className="Filter">
      <div className="sidebar__title sidebar__text--bold">Filter</div>
      <div className="Filter__list">
        <Accordion>
          <FilterItem title="Size" list={["S", "M", "L"]} eventKey="0" />
          <FilterItem
            title="Color"
            list={["Red", "Green", "Blue"]}
            eventKey="1"
          />
          <FilterItem
            title="Brand"
            list={["Zara", "H&M", "Pull&Bear", "Dior", "Chanel"]}
            eventKey="2"
          />
        </Accordion>
      </div>
    </div>
  );
};

export default Filter;
