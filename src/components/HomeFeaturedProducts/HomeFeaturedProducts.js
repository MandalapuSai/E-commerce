import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./HomeFeaturedProducts.css";

import ProductDetailPopup from "../ProductDetailPopup/ProductDetailPopup";

import cashews from "../../assets/FeaturedProducts-1.png";
import mango from "../../assets/FeaturedProducts-2.png";
import pickle from "../../assets/FeaturedProducts-3.png";
import almond from "../../assets/FeaturedProducts-4.png";

const initialProducts = [
  {
    id: 1,
    title: "Natural Jumbo Cashews",
    category: "Dry Fruits",
    weight: "500 g",
    price: 450,
    oldPrice: 540,
    image: cashews,
  },
  {
    id: 2,
    title: "Delicious Mango 1 kg",
    category: "Fruits",
    weight: "Per 1 Kg (4 to 5 Items)",
    price: 99,
    oldPrice: 120,
    image: mango,
  },
  {
    id: 3,
    title: "Natural Red Chilli Pickle",
    category: "Pickles",
    weight: "250 g",
    price: 250,
    oldPrice: 300,
    image: pickle,
  },
  {
    id: 4,
    title: "Natural Almond",
    category: "Dry Fruits",
    weight: "500 g",
    price: 450,
    oldPrice: 540,
    image: almond,
  },
];

const HomeFeaturedProducts = () => {
  const [products] = useState(initialProducts);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowPopup = (selectedItem) => {
    setSelectedProduct(selectedItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <Container fluid className="homefeaturedproducts-main px-5">
      <h2 className="homefeaturedproducts-title ">
        <span>Featured</span> Products
      </h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} lg={3} md={6} sm={6} xs={12} className="mb-4">
            <Card
              className="homefeaturedproducts-card"
              onClick={() => handleShowPopup(product)}
            >
              <Card.Img
                variant="top"
                src={product.image  }
                className="homefeaturedproducts-img"
                alt={product.title}
              />
              <Card.Body>
                <p className="homefeaturedproducts-category">
                  {product.category}{" "}
                </p>
                <h5 className="homefeaturedproducts-name">{product.title}</h5>
                <p className="homefeaturedproducts-weight">{product.weight}</p>
                <div className="homefeaturedproducts-actions">
                  <div className="homefeaturedproducts-price">
                    <span className="homefeaturedproducts-current">
                      Rs. {product.price}/-
                    </span>
                    {/* <span className="homefeaturedproducts-old">
                      Rs. {product.oldPrice}/-
                    </span> */}
                  </div>
                  <Button
                    variant="success"
                    className="homefeaturedproducts-add"
                  >
                    <FaShoppingCart className="homefeaturedproducts-carticon" />{" "}
                    Add
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Popup for Product Details */}
      {selectedProduct && (
        <ProductDetailPopup
          show={showPopup}
          onHide={handleClosePopup}
          product={selectedProduct}
        />
      )}
    </Container>
  );
};

export default HomeFeaturedProducts;
