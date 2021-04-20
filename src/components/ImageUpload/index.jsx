import "./style.scss";
import { useRef, useState } from "react";
import classNames from "classnames";

const ImageUpload = ({ className, id, onUpload }) => {
  const fileSelect = useRef();
  const fileDrag = useRef();
  const fileUploadForm = useRef();
  const [isGood, setIsGood] = useState(false);
  const [imgSrc, setImgSrc] = useState("#");
  const [dragOver, setDragOver] = useState(false);

  const removeFile = (e) => {
    fileSelect.current.value = "";
    parseFile({});
  };

  const fileDragHover = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragover") {
      setDragOver(true);
    } else {
      setDragOver(false);
    }
  };

  const parseFile = (f) => {
    const good = /\.(?=gif|jpg|png|jpeg)/gi.test(f.name);
    setIsGood(good);
    if (good) {
      setImgSrc(URL.createObjectURL(f));
      onUpload(f);
    } else {
      onUpload(undefined);
    }
  };
  const fileSelectHandler = (e) => {
    if (e.dataTransfer !== undefined) {
      fileSelect.current.files = e.dataTransfer.files;
    }
    const { files } = fileSelect.current;
    fileDragHover(e);
    for (let file of files) {
      if (file) {
        parseFile(file);
      } else {
        break;
      }
    }
  };

  return (
    <div className={"image-upload " + className}>
      <img
        src="/images/close.svg"
        alt="remove_icon"
        className="image-upload__remove"
        onClick={(e) => removeFile(e)}
      />
      <div className="uploader" ref={fileUploadForm}>
        <input
          id={"file-upload-" + id}
          type="file"
          name="image"
          accept="image/*"
          ref={fileSelect}
          onChange={(e) => fileSelectHandler(e)}
          required
        />

        <label
          htmlFor={"file-upload-" + id}
          className={classNames("image-upload__label", { hover: dragOver })}
          ref={fileDrag}
          onDragOver={(e) => fileDragHover(e)}
          onDragLeave={(e) => fileDragHover(e)}
          onDrop={(e) => fileSelectHandler(e)}
        >
          <img
            id="file-image"
            src={imgSrc}
            alt="Preview"
            className={classNames("file-image", { hidden: !isGood })}
          />
          <div className={isGood ? "hidden" : ""}>
            <img src="/images/add.svg" alt="add_icon" />
            <div className="image-upload__text">Add photo</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
