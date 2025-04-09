import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./CategoryProducts.css";

import ProductDetailPopup from '../ProductDetailPopup/ProductDetailPopup'

import { categories } from "../ProductList/ProductList";
import { recentlyViewed } from "../ProductList/ProductList";
//assets category banners
import fruitsBanner from "../../assets/fruitsbanner.jpg";
import dryFruitsBanner from "../../assets/dryfruitsbanner.png";
import picklesBanner from "../../assets/picklesbanner.jpeg";
import powdersBanner from "../../assets/powdersbanner.png";
import spicesBanner from "../../assets/spicesbanner.png";

// Categories banners configuration
const categoriesbanners = {
  fruits: fruitsBanner,
  "dry fruits": dryFruitsBanner,
  "veg pickles": picklesBanner,
  "non veg pickles": picklesBanner,
  powders: powdersBanner,
  spices: spicesBanner,
};

const CategoryProducts = () => {
  const { categoryName } = useParams();
  // const decodedCategoryName = decodeURIComponent(categoryName); 
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const category = categories.find(cat =>
    cat.name.toLowerCase().replace(/\s+/g, "-") === categoryName
  );

  let categoryBanner;
  if (category) {
    categoryBanner = categoriesbanners[category.name.toLowerCase()];
  }

  const handleShowPopup = (selectedItem) => {
    setSelectedProduct(selectedItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <Container fluid className="p-0 overflow-hidden">
      {category ? (
        <>
          {/* Display the category banner */}
          {categoryBanner && (
            <Row className="category-banner-section mb-5">
              <Col lg={12} className="category-banner-content">
                <div
                  className="category-banner"
                  style={{
                    background: `url(${categoryBanner}) no-repeat center center/cover`,
                    height: "300px",
                  }}
                ></div>
              </Col>
            </Row>
          )}
          <div className="text-center">
            <h2 className="category-heading mb-5">{category.name}</h2>
          </div>
          <Row className="px-5">
            {category.products.map((product, idx) => (
              <Col key={idx} sm={12} md={6} lg={3} className="mb-4">
                <Card className=" product-card" onClick={() => handleShowPopup(product)}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-img"
                    alt={product.title}
                  />
                  <Card.Body>
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
        </>
      ) : (
        <h2 className="text-center my-4">No Products Found</h2>
      )}

      {/* Recently Viewed Products Section */}
      <div className="recently-viewed-section px-5 mt-5">
        <h4 className="recently-view-title p-4">
          <span className="recently-view-underlined">Recently Viewed</span>
          <span className="recently-view-green"> Products</span>
        </h4>
        <Row>
          {recentlyViewed.map((product, idx) => (
            <Col key={idx} sm={12} md={6} lg={3} className="mb-5">
              <Card className="product-card" onClick={() => handleShowPopup(product)}>
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

export default CategoryProducts;
