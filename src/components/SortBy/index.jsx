import "./style.scss";

const SortBy = () => {
  return (
    <form className="SortBy">
      <label for="choice">Sort by:</label>
      <select name="choice" className="SortBy__choice">
        <option value="popularity">Popularity</option>
        <option value="nameAsc">Name: A- Z</option>
        <option value="priceAsc">Price: lowest to highest</option>
        <option value="priceDes">Price: highest to lowest</option>
      </select>
    </form>
  );
};

export default SortBy;
