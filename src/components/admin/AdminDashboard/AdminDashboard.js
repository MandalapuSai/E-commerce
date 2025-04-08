import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import "./AdminDashboard.css";
import logo from "../../../assets/Eccomrce_logo_1.png";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    setShowLogoutModal(false);
    toast.success("Logged out successfully !!");
    window.location.href = "/admin-signin";
    localStorage.removeItem("User");
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
          className={`admindashboard-sidebar ${
            isSidebarOpen ? "open" : "closed"
          }`}
        >
          <div className="sidebar-header">
            {isSidebarOpen && (
              <img src={logo} alt="Admin Logo" className="sidebar-logo" />
            )}
          </div>
          {isSidebarOpen && (
            <FaTimes className="sidebar-close-icon" onClick={toggleSidebar} />
          )}
          {isSidebarOpen && (
            <ul className="sidebar-menu">
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/categories">Categories</Link>
              </li>
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/products">Products</Link>
              </li>
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/carousel">Carousel</Link>
              </li>
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/coupons">Coupons</Link>
              </li>
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/orders">Order Details</Link>
              </li>
              <li>
                <Link className ="sidebar-menu-link" to="/admin-dashboard/profile">Profile</Link>
              </li>
            </ul>
          )}
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
          {!isSidebarOpen && (
            <FaBars className="sidebar-toggle-icon" onClick={toggleSidebar} />
          )}

          {/* Show child routes */}
          <Outlet />
        </Col>
      </Row>

      {/* Logout Modal */}
      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Body>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            className="mt-3"
          >
            Do you want to Logout ?
          </h2>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0px",
            border: "none",
          }}
        >
          <Button
            style={{ backgroundColor: "#ED1D1D", border: "none" }}
            onClick={handleLogout}
          >
            Yes,Logout
          </Button>
          <Button
            style={{ backgroundColor: "#304D30", border: "none" }}
            onClick={() => setShowLogoutModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
