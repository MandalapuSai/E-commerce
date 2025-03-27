import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "./UserOrders.css";

import mango from "../../assets/FeaturedProducts-2.png";
import redchill from "../../assets/redchill.png";
import cashews from "../../assets/FeaturedProducts-1.png";
import banana from "../../assets/banana.png";
import muttonpickle from "../../assets/muttonpickle.png";

const  UserOrders = () => {
  // Updated Orders Data
  const [orders] = useState([
    {
      id: 1,
      name: "Delicious Mango Pickle",
      status: "On the way",
      weight: "500g",
      quantity: 1,
      cost: "350",
      statusColor: "yellow",
      year: 2024,
      image: mango,
    },
    {
      id: 2,
      name: "Natural Red Chilli Pickle",
      status: "Delivered",
      weight: "250g",
      quantity: 2,
      cost: "400",
      statusColor: "green",
      year: 2023,
      image: redchill,
    },
    {
      id: 3,
      name: "Natural Jumbo Cashews",
      status: "Cancelled",
      weight: "1kg",
      quantity: 1,
      cost: "700",
      statusColor: "red",
      year: 2022,
      image: cashews,
    },
    {
      id: 4,
      name: "Banana",
      status: "Shipping",
      weight: "600g",
      quantity: 3,
      cost: "250",
      statusColor: "blue",
      year: 2024,
      image: banana, 
    },
    {
      id: 5,
      name: "Mutton Pickle",
      status: "Processing",
      weight: "300g",
      quantity: 2,
      cost: "600",
      statusColor: "orange",
      year: 2023,
      image: muttonpickle,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({
    Delivered: false,
    "On the way": false,
    Shipping: false,
    Confirmed: false,
    Cancelled: false,
    Processing: false,
  });
  const [selectedYears, setSelectedYears] = useState({
    2021: false,
    2022: false,
    2023: false,
    2024: false,
  });

  // Handle status checkbox change
  const handleStatusChange = (e) => {
    const { name, checked } = e.target;
    setSelectedStatus((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Handle year checkbox change
  const handleYearChange = (e) => {
    const { name, checked } = e.target;
    setSelectedYears((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Clear All Filters
  const handleClearAll = () => {
    setSelectedStatus({
      Delivered: false,
      "On the way": false,
      Shipping: false,
      Confirmed: false,
      Cancelled: false,
      Processing: false,
    });
    setSelectedYears({
      2021: false,
      2022: false,
      2023: false,
      2024: false,
    });
    setSearchTerm("");
  };

  // Filter orders based on search, selected status, and selected year
  const filteredOrders = orders.filter((order) => {
    const isStatusSelected = selectedStatus[order.status];
    const isYearSelected = selectedYears[order.year];

    return (
      (searchTerm
        ? order.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true) &&
      (Object.values(selectedStatus).some((val) => val)
        ? isStatusSelected
        : true) &&
      (Object.values(selectedYears).some((val) => val) ? isYearSelected : true)
    );
  });

  return (
    <Container fluid className="mt-4 px-5 py-5">
      <Row>
        <Col md={3} className="border-end pe-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Filters</h5>
            <span
              className="clear-all-filter"
              onClick={handleClearAll}
              size="sm"
            >
              Clear All
            </span>
          </div>

          <hr />

          {/* Order Status Filter */}
          <Form.Group controlId="status" className="mt-2">
            <Form.Label>Order Status</Form.Label>
            {[
              "Delivered",
              "On the way",
              "Shipping",
              "Confirmed",
              "Cancelled",
              "Processing",
            ].map((status) => (
              <Form.Check
                key={status}
                type="checkbox"
                label={status}
                name={status}
                checked={selectedStatus[status]}
                onChange={handleStatusChange}
                id={`status-${status}`}
                className="pb-1 custom-checkbox"
              />
            ))}
          </Form.Group>

          <hr />

          {/* Order Year Filter */}
          <Form.Group controlId="year" className="mt-2">
            <Form.Label>Order Year</Form.Label>
            {["2021", "2022", "2023", "2024"].map((year) => (
              <Form.Check
                key={year}
                type="checkbox"
                label={year}
                name={year}
                checked={selectedYears[year]}
                onChange={handleYearChange}
                id={`year-${year}`}
                className="pb-1 custom-checkbox"
              />
            ))}
          </Form.Group>
        </Col>

        <Col md={9} className="ps-4">
          <Row>
            <Col className="mb-5">
              <Form.Group controlId="search">
                <Form.Control
                  type="text"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Render the filtered orders */}
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <Card key={order.id} className="mb-3">
                <Card.Body>
                  <Row>
                    {/* Image Column */}
                    <Col md={3}>
                      <img
                        src={order.image} // Add image URL here
                        alt={order.name}
                        className="img-fluid" // Ensures the image is responsive
                        style={{ maxHeight: "100px", objectFit: "cover" }} // Adjust styling as needed
                      />
                    </Col>

                    {/* Order Details Column */}
                    <Col md={5} className="d-flex flex-column justify-content-center">
                      <h6>{order.name}</h6>
                      <p>
                        Weight: {order.weight} | Quantity: {order.quantity} |
                        Year: {order.year}
                      </p>
                    </Col>

                    {/* Status Column */}
                    <Col md={4} className="text-end d-flex flex-column justify-content-center">
                      <span
                        style={{ color: order.statusColor, fontWeight: "bold" }}
                      >
                        {order.status}
                      </span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default UserOrders;
