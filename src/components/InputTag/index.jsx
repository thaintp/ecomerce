import "./style.scss";
import { useState, useRef } from "react";

const InputTag = () => {
  const [tags, setTags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [categories, setCategories] = useState([
    "Casual dresses",
    "Going out dresses",
    "Maxi / Midi dresses",
  ]);

  const tagInput = useRef();

  const removeTag = (i) => {
    const newTags = [...tags];
    const tag = newTags.splice(i, 1);
    setTags(newTags);
    setCategories([...categories, tag]);
  };

  const addCategory = (e) => {
    setCategories([...categories, tagInput.current.value]);
    tagInput.current.value = null;
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      tagInput.current.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className="input-tag">
      <div className="input-tags">
        <ul className="input-tags__tags">
          {tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button
                type="button"
                onClick={() => {
                  removeTag(i);
                }}
              >
                <img src="/images/close-2.svg" alt="" />
              </button>
            </li>
          ))}
          <li
            className="input-tags__dropdown"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src="/images/arrow.svg"
              alt=""
              style={{
                transform: `rotate(${showDropdown ? "180deg" : "0"})`,
              }}
            />
          </li>
        </ul>
      </div>
      <div
        className="input-select"
        style={{
          display: showDropdown ? "block" : "none",
        }}
      >
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() =>
                !tags.includes(category) &&
                (setTags([...tags, category]) ||
                  setCategories(categories.filter((x) => x != category)))
              }
            >
              {category}
            </li>
          ))}
        </ul>
        <hr />
        <div
          className="input-select__label"
          onClick={() => setShowInput(!showInput)}
          style={{
            display: !showInput ? "flex" : "none",
          }}
        >
          <img src="/images/add.svg" alt="" />
          Add new category
        </div>
        <div
          className="input-select__input"
          style={{
            display: showInput ? "flex" : "none",
          }}
        >
          <input type="text" ref={tagInput} className="form-control w-100" />
          <button
            className="input-select__button"
            onClick={() => setShowInput(false)}
          >
            <img src="/images/close.svg" alt="" />
          </button>
          <button
            className="input-select__button"
            style={{
              backgroundColor: "#ffa15f",
            }}
            onClick={(e) => addCategory(e)}
          >
            <img src="/images/done.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputTag;
