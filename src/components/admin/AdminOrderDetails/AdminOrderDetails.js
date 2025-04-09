import React from "react";
import { Table, Button } from "react-bootstrap";

const AdminOrderDetails = () => {
  const orders = [
    {
      id: 1,
      orderName: "Product A",
      grams: "500g",
      quantity: 2,
      price: "$20",
      customerName: "John Doe",
      customerAddress: "123 Main St, City",
      status: "Pending",
    },
    {
      id: 2,
      orderName: "Product B",
      grams: "1kg",
      quantity: 1,
      price: "$15",
      customerName: "Jane Smith",
      customerAddress: "456 Market St, City",
      status: "Shipped",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-3 fw-bold">Admin Order Details</h2>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Order Name</th>
            <th>Grams</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Confirm</th>
            <th>Shipped</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.orderName}</td>
              <td>{order.grams}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.customerName}</td>
              <td>{order.customerAddress}</td>
              <td>
                <Button variant="success" size="sm">
                  Confirm
                </Button>
              </td>
              <td>
                <Button variant="warning" size="sm">
                  Shipped
                </Button>
              </td>
              <td>
                <Button variant="primary" size="sm">
                  Delivered
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminOrderDetails;