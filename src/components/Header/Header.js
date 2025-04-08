import React, { useState, useEffect } from "react";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";

import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Logo from "../../assets/Eccomrce_logo_1.png";

import { categories } from "../ProductList/ProductList";
import ProductDetailPopup from "../ProductDetailPopup/ProductDetailPopup";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setIsMobile(false);
  }, [location]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = [];
      categories.forEach((category) => {
        category.products.forEach((product) => {
          if (product.title.toLowerCase().includes(value.toLowerCase())) {
            results.push(product);
          }
        });
      });
      setFilteredResults(results);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
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
    <>
      <Navbar
        expand="lg"
        className="header fixed-top px-4"
        bg="success"
        variant="dark"
      >
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" onClick={() => setIsMobile(false)}>
            <img src={Logo} alt="Shop Logo" width="130" />
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" in={isMobile}>
            <Nav className="ms-auto gap-2">
              <Nav.Link as={Link} to="/" onClick={() => setIsMobile(false)}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setIsMobile(false)}
              >
                About Us
              </Nav.Link>

              {/* Products Dropdown (Hover to Open) */}
              <NavDropdown
                title="Products"
                id="products-dropdown"
                show={showProductsDropdown}
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                {/*  Clicking "Products" itself navigates to all products */}
                <NavDropdown.Item
                  as={Link}
                  to="/productList"
                  className="custom-dropdown-item"
                >
                  View All Products
                </NavDropdown.Item>

                <NavDropdown.Divider />

                {categories.map((category, index) => (
                  <NavDropdown.Item
                    key={index}
                    className="custom-dropdown-item"
                    onClick={() => {
                      setIsMobile(false);
                      handleCategoryClick(category.name);
                    }}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={Link} to="/blog" onClick={() => setIsMobile(false)}>
                Our Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/faqs" onClick={() => setIsMobile(false)}>
                FAQs
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setIsMobile(false)}
              >
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Search Icon (Click to Open Popup) */}
            <Button
              variant="none"
              className="header-icon ms-2"
              style={{ fontSize: "19px" }}
              onClick={() => setShowSearch(!showSearch)}
            >
              <FaSearch />
            </Button>

            {/* Cart & Profile Icons */}
            <Nav className="d-flex align-items-start ms-2">
              <Nav.Link as={Link} to="/cart" className="header-icon">
                <FaShoppingCart size={22} />
              </Nav.Link>

              {/* Profile Dropdown */}
              <NavDropdown
                title={<FaUser size={22} />}
                id="profile-dropdown"
                align="end"
                className="header-icon"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/user-profile"
                  onClick={() => setIsMobile(false)}
                  className="custom-dropdown-item"
                >
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/user-orders"
                  onClick={() => setIsMobile(false)}
                  className="custom-dropdown-item"
                >
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/"
                  onClick={() => setIsMobile(false)}
                  className="custom-dropdown-item"
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Popup */}
      {showSearch && (
        <div className="search-popup">
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button
            className="search-close-btn"
            onClick={() => setShowSearch(false)}
          >
            <FaTimes />
          </button>

          {/* Search Results */}
          <div className="search-results">
            {searchQuery.trim() !== "" ? (
              filteredResults.length > 0 ? (
                filteredResults.map((product, idx) => (
                  <div
                    key={idx}
                    className="result-item"
                    onClick={() => handleShowPopup(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="result-image"
                    />
                    <span>{product.title}</span>
                  </div>
                ))
              ) : (
                // 👇 Display No Results message in the same position
                <div className="result-item no-results">
                  {/* <img src="your-no-results-image.png" alt="No results" className="result-image" /> */}
                  <span>No results found.</span>
                </div>
              )
            ) : null}
          </div>
        </div>
      )}

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

export default Header;
