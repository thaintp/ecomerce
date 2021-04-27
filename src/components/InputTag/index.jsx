import "./style.scss";
import { useState, useRef, useEffect } from "react";
import CategoryService from "services/category.service";

const InputTag = ({ onChange }) => {
  const [tags, setTags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [categories, setCategories] = useState([]);
  const tagInput = useRef();

  const removeTag = (i) => {
    const newTags = [...tags];
    const tag = newTags.splice(i, 1);
    setTags(newTags);
    setCategories([...categories, ...tag]);
  };

  const addCategory = (e) => {
    const category = tagInput.current.value;
    CategoryService.postCategory(category)
      .then((data) => {
        setCategories([...categories, data]);
        tagInput.current.value = null;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    CategoryService.getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    onChange(tags);
  }, [tags]);

  return (
    <div className="input-tag">
      <div className="input-tags">
        <ul className="input-tags__tags">
          {tags.map((tag, i) => (
            <li key={tag._id}>
              {tag.name}
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
              key={category._id}
              onClick={() =>
                !tags.includes(category) &&
                (setTags([...tags, category]) ||
                  setCategories(
                    categories.filter((x) => x._id !== category._id)
                  ))
              }
            >
              {category.name}
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
