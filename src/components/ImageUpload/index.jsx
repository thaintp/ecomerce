import "./style.scss";

const ImageUpload = ({ className }) => {
  return (
    <div className={"image-upload " + className}>
      <div id="file-upload-form" class="uploader">
        <input
          id="file-upload"
          type="file"
          name="image"
          accept="image/*"
          required
        />

        <label for="file-upload" id="file-drag">
          <img
            id="file-image"
            src="#"
            alt="Preview"
            class="hidden file-image"
          />
          <div id="start" class="start">
            <img src="/images/add.svg" alt="add_icon" />
            <div id="notimage" class="hidden notimage">
              Vui lòng chọn ảnh
            </div>
            <div id="file-upload-btn">Add photo</div>
          </div>
          <div id="response" class="hidden response">
            <div id="messages" class="messages"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
