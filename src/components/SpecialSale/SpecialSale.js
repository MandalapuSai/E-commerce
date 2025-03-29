import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import "./SpecialSale.css";
import { FaShoppingCart } from "react-icons/fa";


import ProductDetailPopup from '../ProductDetailPopup/ProductDetailPopup';


// Import Images
import SpecialSale1 from "../../assets/SpecialSale-1.png";
import SpecialSale2 from "../../assets/SpecialSale-2.png";

const SpecialSale = () => {
  const products = [
    {
      id: 1,
      image: SpecialSale1,
      title: "Keitt Mango",
      category: "Special Kit",
      weight: "Per 1 Kg ( 4 to 5 Items )",
      price: 299,
      oldPrice: 399,
      bgColor: "#e8f6e8",
      borderColor: "#007bff",
    },
    {
      id: 2,
      image: SpecialSale2,
      title: "Mango Pickle",
      category: "Special Kit",
      weight: "500 g",
      price: 299,
      oldPrice: 399,
      bgColor: "#f0f8e0",
      borderColor: "#ccc",
    },
  ];


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
    <div className="SpecialSale-main container-fluid px-5">

      <div className="row SpecialSale-row1">
        <h2 className="SpecialSale-title">
          Special <span>Sale</span>
        </h2>
        {products.map((item) => (
          <div key={item.id} className="col-md-6">
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
                    Rs. {item.price}/- <span className="SpecialSale-oldPrice">Rs. {item.oldPrice}/-</span>
                  </p>
                  <p className="SpecialSale-desc">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <Button variant="success" className="homefeaturedproducts-add">
                    <FaShoppingCart className="homefeaturedproducts-carticon" /> Add
                  </Button>                
                  </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
     {/* Popup for Product Details */}
     {selectedProduct && (
                <ProductDetailPopup
                    show={showPopup}
                    onHide={handleClosePopup}
                    product={selectedProduct}
                />
            )}
    </div>
  );
};

export default SpecialSale;
