import "./style.scss";

const Status = ({ status }) => {
  return (
    <span className={`status status--${status.toLowerCase()}`}>{status}</span>
  );
};

export default Status;
