import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./SpecialSale.css";

import ProductDetailPopup from "../ProductDetailPopup/ProductDetailPopup";

import { recentlyViewed } from "../ProductList/ProductList";

// Import Images
import SpecialSale1 from "../../assets/SpecialSale-1.png";
import SpecialSale2 from "../../assets/SpecialSale-2.png";

const SpecialSale = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: SpecialSale1,
      title: "Keitt Mango",
      category: "Special Kit",
      weight: "Per 1 Kg ( 4 to 5 Items )",
      price: 599,
      oldPrice: 799,
    },
    {
      id: 2,
      image: SpecialSale2,
      title: "Mango Pickle",
      category: "Special Kit",
      weight: "500 g",
      price: 399,
      oldPrice: 499,
    },
  ];

  const handleShowPopup = (selectedItem) => {
    setSelectedProduct(selectedItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Special Sale Section */}
      <section className="SpecialSale-main container-fluid px-5">
        <Row className="SpecialSale-row1">
          <h2 className="SpecialSale-title">
            Special <span>Sale</span>
          </h2>
          {products.map((item) => (
            <Col md={6} key={item.id} className="mb-4">
              <Card className="SpecialSale-card" onClick={() => handleShowPopup(item)}>
                <div className="SpecialSale-content">
                  <div className="SpecialSale-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="SpecialSale-info">
                    <h5>
                      {item.title} <span>{item.category}</span>
                    </h5>
                    <p className="SpecialSale-weight">{item.weight}</p>
                    <p className="SpecialSale-price">
                      Rs. {item.price}/-
                      {/* <span className="SpecialSale-oldPrice">
                        {" "}
                        Rs. {item.oldPrice}/-
                      </span> */}
                    </p>
                    <p className="SpecialSale-desc">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <Button
                      variant="success"
                      className="SpecialSale-add-to-cart"
                    >
                      <FaShoppingCart className="SpecialSale-cart-icon" /> Add
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Recently Viewed Products Section */}
      <section className="container-fluid recently-viewed-section-container">
        <div className="px-5 mt-5">
          <h4 className="recently-view-title p-4">
            <span className="recently-view-underlined">Recently Viewed</span>
            <span className="recently-view-green"> Products</span>
          </h4>
          <Row>
            {recentlyViewed.map((product, idx) => (
              <Col key={idx} sm={12} md={6} lg={3} className="mb-5">
                <Card
                  className="product-card"
                  onClick={() => handleShowPopup(product)}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-img"
                    alt={product.title}
                  />
                  <Card.Body>
                    <div className="category-name">
                      <span className="category">{product.category}</span>
                    </div>
                    <div className="name-grams">
                      <Card.Title>{product.title}</Card.Title>
                      <span className="grams">{product.grams}</span>
                    </div>
                    <div className="price-cart">
                      <span className="price">Rs. {product.price}/-</span>
                      <Button size="sm" className="add-cart">
                        <FaShoppingCart className="carticon" /> Add
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Popup for Product Details */}
      {selectedProduct && (
        <ProductDetailPopup
          show={showPopup}
          onHide={handleClosePopup}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default SpecialSale;
