import "./style.scss";
import classNames from "classnames";
const SidebarItem = (props) => {
  return (
    <div
      className={classNames("sidebar-item", {
        "sidebar-item--active": props.active,
      })}
    >
      <div className="sidebar-item__icon">
        <img src={props.icon} alt="sidebar_icon" />
      </div>
      <div className={"sidebar-item__title"}>{props.title}</div>
    </div>
  );
};

export default SidebarItem;
