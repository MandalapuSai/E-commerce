import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";  
import "./AdminDashboard.css";
import logo from "../../assets/Eccomrce_logo_1.png";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("AdminProfile");
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("adminLoggedIn"); 
        if (!user) {
            navigate("/admin-signin");  
        }
    }, [navigate]);

    const handleLogout = () => {
        setShowLogoutModal(false);
        localStorage.removeItem("adminLoggedIn");  
        navigate("/admin-signin");
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Container fluid className="admindashboard-container">
            <Row>
                {/* Sidebar */}
                <Col
                    md={isSidebarOpen ? 3 : 0}
                    lg={isSidebarOpen ? 2 : 0}
                    className={`admindashboard-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
                >
                    <div className="sidebar-header">
                        {isSidebarOpen && <img src={logo} alt="Admin Logo" className="sidebar-logo" />}
                    </div>
                    {/* Close Icon */}
                    {isSidebarOpen && (
                        <FaTimes className="sidebar-close-icon" onClick={toggleSidebar} />
                    )}

                    {/* Sidebar Menu */}
                    {isSidebarOpen && (
                        <ul className="sidebar-menu">
                            <li onClick={() => setActiveTab("AdminProfile")} className={activeTab === "AdminProfile" ? "active" : ""}>
                                Admin Profile
                            </li>
                            <li onClick={() => setActiveTab("dashboard")} className={activeTab === "dashboard" ? "active" : ""}>
                                Categories
                            </li>
                            <li onClick={() => setActiveTab("users")} className={activeTab === "users" ? "active" : ""}>
                                Products
                            </li>
                            <li onClick={() => setActiveTab("settings")} className={activeTab === "settings" ? "active" : ""}>
                                Price & Grams
                            </li>
                            <li onClick={() => setActiveTab("OrderDetails")} className={activeTab === "OrderDetails" ? "active" : ""}>
                                Order Details
                            </li>
                        </ul>
                    )}

                    {/* Logout Button */}
                    {isSidebarOpen && (
                        <div className="logout-button">
                            <Button variant="danger" onClick={() => setShowLogoutModal(true)}>
                                <FaSignOutAlt /> Logout
                            </Button>
                        </div>
                    )}
                </Col>

                {/* Main Content */}
                <Col
                    md={isSidebarOpen ? 9 : 12}
                    lg={isSidebarOpen ? 10 : 12}
                    className="admindashboard-content"
                >
                    {/* Toggle Button */}
                    {!isSidebarOpen && (
                        <FaBars className="sidebar-toggle-icon" onClick={toggleSidebar} />
                    )}

                    {/* Dynamic Content */}
                    {activeTab === "dashboard" && <h2>Categories Content</h2>}
                    {activeTab === "users" && <h2>Products Management</h2>}
                    {activeTab === "settings" && <h2>Price & Grams Settings</h2>}
                    {activeTab === "AdminProfile" && <h2>Admin Profile</h2>}
                    {activeTab === "OrderDetails" && <h2>Order Details</h2>}
                </Col>
            </Row>

            {/* Logout Confirmation Modal */}
            <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
                <Modal.Body>
                    <p>Are you sure you want to log out?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default AdminDashboard;
