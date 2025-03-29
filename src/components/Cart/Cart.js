import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importing icons
import "./Cart.css"; // Importing CSS file
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import { Link } from "react-router-dom";


// Importing product images
import Cart1 from "../../assets/cart-1.png";
import Cart2 from "../../assets/recent-3.png";
import Cart3 from "../../assets/recent-2.png";

const Cart = () => {
    const navigate = useNavigate(); // Initialize navigation function

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Cashew Nuts", weight: "250 g", price: 199, quantity: 1, image: Cart1 },
        { id: 2, name: "Tomato Pickle", weight: "250 g", price: 149, quantity: 1, image: Cart2 },
        { id: 3, name: "Strawberry", weight: "250 g", price: 250, quantity: 1, image: Cart3 },
    ]);

    // Increase Quantity
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrease Quantity
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    // Remove Item
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate Total Price
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryCharge = cartItems.length > 0 ? 0.50 : 0;
    const finalAmount = totalAmount + deliveryCharge;

    return (
        <div className="cart-container">
            {/* Cart Items Section */}
            <div className="cart-items">
                <h4 className="cart-count-products">
                    Cart: {cartItems.length} Items
                    <button
                        className="go-to-product"
                        onClick={() => navigate("/")} // Navigate to product page
                    >
                        Go to Product
                    </button>
                </h4>

                {cartItems.length === 0 ? (
                    <p className="empty-cart">
                        Your cart is empty. <Link to="/">Go back to shop</Link>
                    </p>) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-image" />
                            <div className="cart-details">
                                <h5>{item.name} ({item.weight})</h5>
                                <p>Price: ₹{item.price}/-</p>
                                <div className="cart-quantity">
                                    <button className="cart-btn" onClick={() => decreaseQuantity(item.id)}><FaMinus /></button>
                                    <span>{item.quantity}</span>
                                    <button className="cart-btn" onClick={() => increaseQuantity(item.id)}><FaPlus /></button>
                                    <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Cart Summary Section */}
            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h5>Price Details:</h5>
                    {cartItems.map(item => (
                        <p key={item.id}>
                            {item.name} ({item.weight}) ({item.quantity})
                            <span> ₹{item.price * item.quantity}</span>
                        </p>
                    ))}
                    <p>Delivery Charges: <span>₹{deliveryCharge.toFixed(2)}</span></p>
                    <hr />
                    <h4>Total Amount: ₹{finalAmount.toFixed(2)}</h4>
                    <button className="checkout-btn" onClick={() => navigate("/paymentgateway")}>
                        Proceed to Checkout
                    </button>
                    <button className="clear-btn" onClick={() => setCartItems([])}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;