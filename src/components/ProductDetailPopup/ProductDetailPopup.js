import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import "./ProductDetailPopup.css";
 
const ProductDetailPopup = ({ show, onHide, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedGrams, setSelectedGrams] = useState("250g");
  const [shareModal, setShareModal] = useState(false); // State for share modal
 
  const handleQuantityIncrease = () => setQuantity((prev) => prev + 1);
  const handleQuantityDecrease = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
 
  // Open share modal
  const openShareModal = () => setShareModal(true);
  const closeShareModal = () => setShareModal(false);
 
  // Share links
  const productUrl = window.location.href;
  const shareText = `${product?.title} - ₹${product?.price}/- \nBuy Now: ${productUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    productUrl
  )}`;
  const instagramUrl = `https://www.instagram.com/`; // No direct share support
 
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="popup-container">
            <img
              src={product?.image}
              alt={product?.title}
              className="popup-product-img"
            />
 
            <div className="popup-buttons">
              <Button className="popup-btn">
                {" "}
                <FaShoppingCart size={22} /> Add to Cart
              </Button>
              <Button className="popup-btn" onClick={openShareModal}>
                {" "}
                <RiShareForwardFill size={22} /> Share
              </Button>
            </div>
 
            <Modal.Title className="popup-title">{product?.title}</Modal.Title>
            <p className="popup-description">
              Explore a delightful mix of farm-fresh fruits, seasonal mangoes,
              and traditional pickles – all in one store! Enjoy juicy apples,
              pulpy mangoes, and spicy homemade pickles, delivered fresh to your
              doorstep. Taste the best of nature and tradition in every bite!
            </p>
            <p className="popup-price">Price ₹ {product?.price}/-</p>
 
            <div className="quantity-controls">
              <button onClick={handleQuantityDecrease} className="quantity-btn">
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button onClick={handleQuantityIncrease} className="quantity-btn">
                +
              </button>
            </div>
 
            <p className="popup-grams-label">
              <strong>Quantity</strong>
            </p>
            <div className="grams-container">
              {["100g", "250g", "500g", "1kg"].map((gram) => (
                <button
                  key={gram}
                  className={`grams-btn ${
                    selectedGrams === gram ? "selected" : ""
                  }`}
                  onClick={() => setSelectedGrams(gram)}
                >
                  {gram}
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
 
      {/* Share Modal */}
      <Modal
        show={shareModal}
        onHide={closeShareModal}
        centered
        className="share-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Share this Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="share-icons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
 
export default ProductDetailPopup;