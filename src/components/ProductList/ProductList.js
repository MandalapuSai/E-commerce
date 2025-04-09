import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

import ProductDetailPopup from '../ProductDetailPopup/ProductDetailPopup'

// assets-images
// fruitsimgs //
import mango from "../../assets/mango.png";
import apple from "../../assets/apple.png";
import banana from "../../assets/banana.png";
import grapes from "../../assets/grapes.png";
import strawberry from '../../assets/strawberry.png';
import watermelon from '../../assets/watermelon.png';
import pineapple from '../../assets/pineapple.png';
import guava from '../../assets/guava.png';
import orange from '../../assets/orange.png';
import kiwi from '../../assets/kiwi.png'

// dryfruitsimgs //
import almonds from "../../assets/almonds.png";
import cashew from "../../assets/cashew.png";
import pistachio from "../../assets/pistachio.png";
import walnuts from "../../assets/walnuts.png";
import tigernuts from "../../assets/tigernuts.png";
import raisins from "../../assets/raisins.png";
import poppyseeds from "../../assets/poppyseeds.png";

// veg pickles //
import mangopickle from "../../assets/mangopickle.png";
import tomatopickle from "../../assets/tomatopickle.png";
import redchill from "../../assets/redchill.png";
import drumstickpickle from "../../assets/drumstickpickle.png";
import amlapickle from "../../assets/amlapickle.png";
import lemon from "../../assets/lemon.png";
import brinjalpickle from "../../assets/brinjalpickle.png";
import ginger from "../../assets/ginger.png";
import apricot from "../../assets/apricot.png";

// non veg pickles //
import chickenpickle from "../../assets/chickenpickle.png";
import muttonpickle from "../../assets/muttonpickle.png";
import prwanpickle from "../../assets/prwanpickle.png";
import fishpickle from "../../assets/fishpickle.png";
import gonguraprawnpickle from "../../assets/gonguraprawnpickle.png";

// powders //
import turmeric from "../../assets/turmeric.png";
import cuminpowder from "../../assets/cuminpowder.png";
import corianderpowder from "../../assets/corianderpowder.png";
import garammasala from "../../assets/garammasala.png";
import fenugreekpowder from "../../assets/fenugreekpowder.png";
import nutmeg from "../../assets/nutmeg.png";

// spices //
import blackpepper from "../../assets/blackpepper.png";
import cloves from "../../assets/cloves.png";
import cardamon from "../../assets/cardamon.png";
import anasa from "../../assets/anasa.png";
import oreganospices from "../../assets/oreganospices.png";
import saffron from "../../assets/saffron.png";
import thyme from "../../assets/thyme.png";
import cinnamon from "../../assets/cinnamon.png";
import bayleaf from "../../assets/bayleaf.png";
import dryginger from "../../assets/dryginger.png";




import recentmango from "../../assets/recentmango.png";
import redchilipowder from "../../assets/redchilipowder.png";


export const categories = [
  {
    name: "Fruits",
    products: [
      { title: "Apple", image: apple, price: 150, grams: "500g" },
      { title: "Mango", image: mango, price: 200, grams: "1kg" },
      { title: "Banana", image: banana, price: 80, grams: "1 dozen" },
      { title: "Grapes", image: grapes, price: 120, grams: "500g" },
      { title: "Strawberry", image: strawberry, price: 380, grams: "1 kg" },
      { title: "Kiwi", image: kiwi, price: 140, grams: "500g" },
      { title: "Pineapple", image: pineapple, price: 280, grams: "1 kg" },
      { title: "Watermelon", image: watermelon, price: 110, grams: "5 kg" },
      { title: "Guava", image: guava, price: 60, grams: "500g" },
      { title: "Orange", image: orange, price: 100, grams: "1 kg" },
    ],
  },
  {
    name: "Dry Fruits",
    products: [
      { title: "Almonds", image: almonds, price: 250, grams: "1kg" },
      { title: "Cashews", image: cashew, price: 300, grams: "500g" },
      { title: "Pistachios", image: pistachio, price: 400, grams: "250g" },
      { title: "Walnuts", image: walnuts, price: 350, grams: "250g" },
      { title: "Raisins", image: raisins, price: 250, grams: "1kg" },
      { title: "Tiger Nut", image: tigernuts, price: 300, grams: "500g" },
      { title: "Poppy Seeds", image: poppyseeds, price: 400, grams: "250g" },
    ],
  },
  {
    name: "Veg Pickles",
    products: [
      { title: "Mango Pickle", image: mangopickle, price: 120, grams: "250g" },
      {
        title: "Tomato Pickle",
        image: tomatopickle,
        price: 230,
        grams: "500g",
      },
      {
        title: "Red Chilly Pickle",
        image: redchill,
        price: 140,
        grams: "100g",
      },
      {
        title: "Drumstick Pickle",
        image: drumstickpickle,
        price: 340,
        grams: "500g",
      },
      { title: "Amla Pickle", image: amlapickle, price: 120, grams: "250g" },
      {
        title: "Lemon",
        image: lemon,
        price: 140,
        grams: "100g",
      },
      {
        title: "Brinjal Pickle",
        image: brinjalpickle,
        price: 160,
        grams: "250g",
      },
      {
        title: "Ginger Pickle",
        image: ginger,
        price: 240,
        grams: "250g",
      },
      {
        title: "Apricot  Pickle",
        image: apricot,
        price: 240,
        grams: "250g",
      },
    ],
  },
  {
    name: "Non Veg Pickles",
    products: [
      { title: "Chicken Pickle", image: chickenpickle, price: 120, grams: "250g" },
      {
        title: "Prawn Pickle ",
        image: prwanpickle,
        price: 340,
        grams: "500g",
      },
      { title: "Mutton Pickle", image: muttonpickle, price: 120, grams: "250g" },
      {
        title: "Fish Pickle",
        image: fishpickle,
        price: 140,
        grams: "100g",
      },
      {
        title: "Gongura Prawn Pickle",
        image: gonguraprawnpickle,
        price: 160,
        grams: "250g",
      },
    ],
  },
  {
    name: "Powders",
    products: [
      { title: "Turmeric Powder", image: turmeric, price: 160, grams: "250g" },
      { title: "Cumin Powder", image: cuminpowder, price: 100, grams: "100g" },
      {
        title: "Coriander Powder",
        image: corianderpowder,
        price: 100,
        grams: "150g",
      },
      { title: "Garam Masala", image: garammasala, price: 170, grams: "500g" },
      { title: "Fenugreek Powder", image: fenugreekpowder, price: 60, grams: "100g" },
      { title: "Red Chilli", image: redchilipowder, price: 390, grams: "1kg" },
      {
        title: "Nutmeg",
        image: nutmeg,
        price: 100,
        grams: "150g",
      },
    ],
  },
  {
    name: "Spices",
    products: [
      { title: "Black Pepper", image: blackpepper, price: 180, grams: "250g" },
      { title: "Cloves", image: cloves, price: 80, grams: "100g" },
      { title: "Cardamon", image: cardamon, price: 140, grams: "150g" },
      { title: "Star Anise", image: anasa, price: 190, grams: "500g" },
      { title: "Oregano", image: oreganospices, price: 150, grams: "150g" },
      { title: "Saffron", image: saffron, price: 140, grams: "250g" },
      { title: "Thyme", image: thyme, price: 130, grams: "100g" },
      { title: "Cinnamon", image: cinnamon, price: 270, grams: "1kg" },
      { title: "Bay Leaf", image: bayleaf, price: 130, grams: "250g" },
      { title: "Dry Ginger", image: dryginger, price: 180, grams: "100g" },
    ],
  },
];

export const recentlyViewed = [
  {
    title: "Walnuts",
    image: walnuts,
    price: 300,
    grams: "500g",
    category: "Dry Fruits",
  },
  {
    title: "Mango ",
    image: recentmango,
    price: 450,
    grams: "1 kg",
    category: "Fruits",
  },
  {
    title: "Tomato",
    image: tomatopickle,
    price: 120,
    grams: "250g",
    category: "Pickles",
  },
  {
    title: "Red Chili",
    image: redchilipowder,
    price: 150,
    grams: "200g",
    category: "Powders",
  },
];

const ProductList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleViewMore = (categoryName) => {
  const formattedCategory = categoryName.toLowerCase().replace(/\s+/g, "-");
  navigate(`/category/${formattedCategory}`);
  };

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
      {/* Banner Section */}
      {/* <Row className="banner-section mb-5">
        <Col lg={12} className="text-center">
          <div className="banner-content">
            <h2>
              100% Fresh, Organic & <br /> Healthy Food
            </h2>
          </div>
        </Col>
      </Row> */}

      <Row className="banner-section mb-5">
        <Col lg={12} className="banner-content">
          <h2>
            100% Fresh, Organic & <br /> Healthy Food
          </h2>
        </Col>
      </Row>

      <div className="product-list-container">
        <h2 className="product-list-heading">
          Product <span className="green-text">List</span>
        </h2>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="category-section px-5 my-5">
          <h4 className="category-title">{category.name}</h4>
          <Row>
            {category.products.slice(0, 4).map((product, idx) => (
              <Col key={idx} sm={12} md={6} lg={3} className="mb-4">
                <Card className="product-card" onClick={() => handleShowPopup(product)}>
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
          <div className="text-center">
            <Button
              variant="outline-success"
              className="view-more-btn"
              onClick={() => handleViewMore(category.name)}
            >
              View More
            </Button>
          </div>
        </div>
      ))}

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

export default ProductList;
