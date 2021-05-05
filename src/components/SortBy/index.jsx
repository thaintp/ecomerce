import "./style.scss";

const SortBy = ({ onChange }) => {
  const handleSort = (e) => {
    switch (e.target.value) {
      case "popularity":
        onChange({ sold: "desc" });
        break;
      case "nameAsc":
        onChange({ name: "asc" });
        break;
      case "priceAsc":
        onChange({ price: "asc" });
        break;
      case "priceDes":
        onChange({ price: "desc" });
        break;
      default:
        onChange({});
        break;
    }
  };
  return (
    <form className="sort-by">
      <label style={{ margin: "0" }}>Sort by:</label>
      <select
        name="choice"
        className="sort-by__choice"
        onChange={(e) => handleSort(e)}
      >
        <option value="popularity">Popularity</option>
        <option value="nameAsc">Name: A- Z</option>
        <option value="priceAsc">Price: lowest to highest</option>
        <option value="priceDes">Price: highest to lowest</option>
      </select>
    </form>
  );
};

export default SortBy;
