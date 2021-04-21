import "./style.scss";
import { ImageUpload, ShopNowButton } from "components";
import { Container, Row, Col } from "components/Bootstrap";
import { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import { useDispatch } from "react-redux";
import { postProduct } from "actions/product";

const PostProduct = () => {
  const dispatch = useDispatch();
  const [photos, setPhotos] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const [name, setName] = useState("nam1");
  const [categories, setCategories] = useState(["c1", "c2 c3"]);
  const [brand, setBrand] = useState("zara");
  const [price, setPrice] = useState(45.5);
  const [size, setSize] = useState(["S", "M"]);
  const [colors, setColors] = useState(["blue"]);
  const [quantity, setQuantity] = useState(120);
  const [description, setDescription] = useState("mo ta");

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      postProduct({
        photos,
        name,
        categories,
        brand,
        price,
        size,
        colors,
        quantity,
        description,
      })
    );
  };

  return (
    <Container className="post-product">
      <form onSubmit={(e) => submitForm(e)} className="post-product__form">
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            PHOTOS
          </Col>
          <Col xs={10}>
            <div className="post-product__form__input post-product__images">
              {photos.map((photo, index) => (
                <ImageUpload
                  className="post-product__image"
                  id={index}
                  key={index}
                  onUpload={(file) =>
                    setPhotos(
                      photos.map((photo, i) => (i === index ? file : photo))
                    )
                  }
                />
              ))}
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            NAME
          </Col>
          <Col xs={10} className="post-product__form__input">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter product name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            CATEGORIES
          </Col>
          <Col xs={10} className="post-product__form__input">
            <ReactTagInput
              tags={categories}
              onChange={(newCategories) => setCategories(newCategories)}
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            BRAND
          </Col>
          <Col xs={10} className="post-product__form__input">
            <input
              type="text"
              className="form-control"
              name="brand"
              placeholder="Enter brand name..."
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            PRICE ($)
          </Col>
          <Col xs={10} className="post-product__form__input">
            <input
              type="number"
              className="form-control"
              name="price"
              placeholder="Enter product price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            SIZE
          </Col>
          <Col xs={10} className="post-product__form__input">
            <ReactTagInput
              tags={size}
              onChange={(newSize) => setSize(newSize)}
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            COLORS
          </Col>
          <Col xs={10} className="post-product__form__input">
            <ReactTagInput
              tags={colors}
              onChange={(newColors) => setColors(newColors)}
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            QUANTITY
          </Col>
          <Col xs={10} className="post-product__form__input">
            <input
              type="number"
              className="form-control"
              name="quantity"
              placeholder="Enter product quantity..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title">
            DESCRIPTION
          </Col>
          <Col xs={10} className="post-product__form__input">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter product description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row className="post-product__row">
          <Col xs={1} className="post-product__form__title"></Col>
          <Col xs={10} className="post-product__form__input">
            <div className="post-product__buttons">
              <ShopNowButton
                href="products/export"
                width="180px"
                height="48px"
                color="#ffa15f"
                backgroundColor="#ffffff"
                title="Cancel"
              />
              <ShopNowButton
                href="products/add"
                width="180px"
                height="48px"
                title="Complete"
                className="post-product__completeBtn"
                onClick={submitForm}
              />
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </form>
    </Container>
  );
};

export default PostProduct;
