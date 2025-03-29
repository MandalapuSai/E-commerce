import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductDetailPopup from '../ProductDetailPopup/ProductDetailPopup';
import { FaShoppingCart } from "react-icons/fa";
import "./RecentlyViewedProducts.css";
import cashews from "../../assets/recent-1.png";
import mango from "../../assets/recent-2.png";
import pickle from "../../assets/recent-3.png";
import almond from "../../assets/recent-4.png";

const initialProducts = [
    {
        id: 1,
        title: "Walnuts",
        category: "Dry Fruits",
        weight: "500 g",
        price: 450,
        oldPrice: 540,
        image: cashews,
        quantity: 1,
    },
    {
        id: 2,
        title: "Strawberry",
        category: "Fruits",
        weight: "Per 1 Kg (4 to 5 Items)",
        price: 99,
        oldPrice: 120,
        image: mango,
        quantity: 1,
    },
    {
        id: 3,
        title: "Tomato",
        category: "Pickles",
        weight: "250 g",
        price: 250,
        oldPrice: 300,
        image: pickle,
        quantity: 1,
    },
    {
        id: 4,
        title: "Turmeric",
        category: "Powders",
        weight: "500 g",
        price: 450,
        oldPrice: 540,
        image: almond,
        quantity: 1,
    },
];

const RecentlyViewedProducts = () => {
    const [products] = useState(initialProducts);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleShowPopup = (product) => {
        setSelectedProduct(product);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedProduct(null);
    };

    return (
        <Container fluid className="RecentlyViewedProducts-main px-5">
            <h2 className="RecentlyViewedProducts-title">
                <span>Recently</span> Viewed Products
            </h2>
            <Row className="justify-content-center">
                {products.map((product) => (
                    <Col key={product.id} lg={3} md={6} sm={6} xs={12} className="mb-4">
                        <Card className="RecentlyViewedProducts-card" onClick={() => handleShowPopup(product)}>
                            <Card.Img variant="top" src={product.image} className="RecentlyViewedProducts-img" />
                            <Card.Body>
                                <p className="RecentlyViewedProducts-category">{product.category} </p>
                                <h5 className="RecentlyViewedProducts-name">{product.title}</h5>
                                <p className="RecentlyViewedProducts-weight">{product.weight}</p>

                                {/* Price and Add button in same row */}
                                <div className="RecentlyViewedProducts-price-row">
                                    <div className="RecentlyViewedProducts-price">
                                        <span className="RecentlyViewedProducts-current">Rs. {product.price}/-</span>
                                        <span className="RecentlyViewedProducts-old">Rs. {product.oldPrice}/-</span>
                                    </div>
                                    <Button variant="success" className="RecentlyViewedProducts-add">
                                        <FaShoppingCart className="RecentlyViewedProducts-carticon" /> Add
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

export default RecentlyViewedProducts;
