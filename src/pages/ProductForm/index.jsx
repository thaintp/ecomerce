import "./style.scss";
import { ImageUpload, ShopNowButton, InputTag } from "components";
import { Container, Row, Col } from "components/Bootstrap";
import { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import Swal from "sweetalert2";

const ProductForm = ({ product, callback }) => {
  const [photos, setPhotos] = useState(
    product.photos ?? [undefined, undefined, undefined, undefined]
  );
  const [name, setName] = useState(product.name ?? "");
  const [categories, setCategories] = useState(product.categories ?? []);
  const [brand, setBrand] = useState(product.brand ?? "");
  const [price, setPrice] = useState(product.price ?? 0);
  const [sizes, setSizes] = useState(product.sizes ?? []);
  const [colors, setColors] = useState(product.colors ?? []);
  const [quantity, setQuantity] = useState(product.quantity ?? 0);
  const [description, setDescription] = useState(product.description ?? "");

  const submitForm = (e) => {
    e.preventDefault();
    if (photos.filter((photo) => photo !== undefined).length === 0) {
      Swal.fire({
        icon: "error",
        title: "Please add at least 1 photo!",
      });
    } else {
      const _product = {
        photos,
        name,
        categories,
        brand,
        price,
        sizes,
        colors,
        quantity,
        description,
      };
      callback(_product, product._id);
    }
  };
  useEffect(() => {
    product.photos && setPhotos([0, 1, 2, 3].map((v) => product.photos[v]));
  }, [product.photos]);

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
                  url={typeof photos[index] === "string" ? photos[index] : ""}
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
            <InputTag
              onChange={(tags) => setCategories(tags.map((tag) => tag._id))}
            ></InputTag>
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
              tags={sizes}
              onChange={(newSizes) => setSizes(newSizes)}
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
                href="/seller/products"
                width="180px"
                height="48px"
                color="#ffa15f"
                backgroundColor="#ffffff"
                title="Cancel"
              />
              <ShopNowButton
                href="/seller/products/add"
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

export default ProductForm;
