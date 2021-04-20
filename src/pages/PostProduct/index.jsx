import "./style.scss";
import { ImageUpload } from "components";

const PostProduct = () => {
  return (
    <div className="post-product">
      Post
      <div className="post-product__images">
        <ImageUpload className="post-product__image" />
        <ImageUpload className="post-product__image" />
        <ImageUpload className="post-product__image" />
        <ImageUpload className="post-product__image" />
      </div>
    </div>
  );
};

export default PostProduct;
