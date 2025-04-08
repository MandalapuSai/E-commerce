import React, { useEffect, useState } from "react";
import {
  Container, Form, Button, Row, Col, Table, Image, Modal,
} from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./AdminCoupons.css";
import { toast } from "react-toastify";

import { Add_Coupon, Get_Coupons, Delete_Coupon, Update_Coupon } from "../../Api/Api";

const AdminCoupons = () => {
  const [Coupons, setCoupons] = useState([
    {
      Coupon_Code: "AWS123",
      Coupon_Discont: "15%",
      amount: '2500',
      startDate: '10/01/2024',
      Expirydate: '25/04/2025',
      status: 'Active'
    },
    {
      Coupon_Code: "AWS456",
      Coupon_Discont: "25%",
      amount: '200',
      startDate: '2/05/2024',
      Expirydate: '05/04/2005',
      status: 'In Active'
    },
  ]);


  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [CouponCode, SetCouponCode] = useState("");
  const [Discount, SetDiscount] = useState("");
  const [StartDate, SetStartDate] = useState("");
  const [ExpiryDate, SetExpiryDate] = useState("");
  const [Amount, SetAmount] = useState("");
  const [Status, SetStatus] = useState("");


  const [GetCouponsData, SetGetCoupons] = useState([]);


  useEffect(() => {
    Get_Coupons_Data_List();
  }, []);



  const Get_Coupons_Data_List = async () => {
    try {
      const response = await fetch(Get_Coupons);
      const data = await response.json();
      SetGetCoupons(data.coupons);
      // console.log(data.coupons)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  const AddBtn = async (e) => {
    e.preventDefault();
    if (!CouponCode || !Discount || !StartDate || !ExpiryDate || !Amount || !Status) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch(Add_Coupon, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coupon_code: CouponCode,
          discount: Discount,
          amount: Amount,
          start_date: StartDate,
          expairy_date: ExpiryDate,
          status: Status,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        SetCouponCode("");
        SetDiscount("");
        SetStartDate("");
        SetExpiryDate("");
        SetAmount("");
        SetStatus("");
        Get_Coupons_Data_List();
      } else {
        toast.error(data.message);
        console.log(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
      console.error("Error:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };


  const [CouponID, SetCouponID] = useState('');

  const DeleteModalBtn = (item) => {
    setShowDeleteModal(true);
    SetCouponID(item.coupon_id);
  };


  const DeleteBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Delete_Coupon, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coupon_id: CouponID,

        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setShowDeleteModal(false);
        Get_Coupons_Data_List();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
      console.error("Error:", error);
    }

  }

  const [UpdateItem, SetUpdateItem] = useState(false)

  const EditBtn = (item) => {
    SetUpdateItem(true)
    console.log(item)
    SetCouponID(item.coupon_id);
    SetCouponCode(item.coupon_code);
    SetDiscount(item.discount);
    SetStartDate(item.start_date.split("T")[0]);
    SetExpiryDate(item.expairy_date.split("T")[0]);
    SetAmount(item.amount);
    SetStatus(item.status);
  };

  const UpdateBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Update_Coupon, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coupon_id: CouponID,
          coupon_code: CouponCode,
          discount: Discount,
          amount: Amount,
          start_date: StartDate,
          expairy_date: ExpiryDate,
          status: Status,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        Get_Coupons_Data_List();
        SetUpdateItem(false)
        SetCouponCode("");
        SetDiscount("");
        SetStartDate("");
        SetExpiryDate("");
        SetAmount("");
        SetStatus("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
      console.error("Update Error:", error);
    }
  };

  const ResetForm = () => {
    SetCouponCode("");
    SetDiscount("");
    SetStartDate("");
    SetExpiryDate("");
    SetAmount("");
    SetStatus("");
    SetCouponID("");
    SetUpdateItem(false);
  };



  return (
    <Container fluid className="admin-products-container">
      <h2>Coupons</h2>
      <Form className="mt-5">
        <Row className="gy-3">
          <Col md={4} sm={12}>
            <Form.Group>
              <Form.Label className="product-label">Coupon Code</Form.Label>
              <Form.Control
                className="product-input-field"
                type="text"
                placeholder="Enter Coupon name" value={CouponCode}
                onChange={(e) => SetCouponCode(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4} sm={12}>
            <Form.Group>
              <Form.Label className="product-label">Discount %</Form.Label>
              <Form.Control
                className="product-input-field"
                type="number"
                placeholder="Enter Discount %" value={Discount}
                onChange={(e) => SetDiscount(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4} sm={12}>
            <Form.Group>
              <Form.Label className="product-label">Amount</Form.Label>
              <Form.Control
                className="product-input-field"
                type="text"
                placeholder="Enter Amount" value={Amount}
                onChange={(e) => SetAmount(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4} sm={12}>
            <Form.Group>
              <Form.Label className="product-label">Start Date</Form.Label>
              <Form.Control
                className="product-input-field"
                type="date" value={StartDate}
                onChange={(e) => SetStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4} sm={12}>
            <Form.Group>
              <Form.Label className="product-label">End Date</Form.Label>
              <Form.Control
                className="product-input-field"
                type="date" value={ExpiryDate}
                onChange={(e) => SetExpiryDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          

          <Col md={4} sm={12}>
            <Form.Group>
              <Form.Label className="product-label">Status</Form.Label>
              <Form.Select
                className="product-input-field" value={Status}
                onChange={(e) => SetStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col sm={12} className="text-center">
            {!UpdateItem ? (
              <Button className="add-product-button" onClick={AddBtn}>
                Add
              </Button>
            ) : (
              <>
                <Button className="add-product-button me-2" onClick={UpdateBtn}>
                  Update
                </Button>
                <Button variant="secondary" className="add-product-cancel" onClick={ResetForm}>
                  Cancel
                </Button>
              </>
            )}
          </Col>


        </Row>
      </Form>

      <section style={{ overflow: 'scroll' }}>
        {GetCouponsData.length > 0 && (
          <Table bordered className="mt-4 product-table">
            <thead>
              <tr className="product-head">
                <th>S.No</th>
                <th>Coupon Code</th>
                <th>Coupon Discount %</th>
                <th>Amount</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {GetCouponsData.map((item, index) => (
                <tr key={index} className="product-row">
                  <td className="p-3">{index + 1}</td>
                  <td>{item.coupon_code}</td>
                  <td>{item.discount}</td>
                  <td>{item.amount}</td>
                  <td>{formatDate(item.start_date)}</td>
                  <td>{formatDate(item.expairy_date)}</td>
                  <td>{item.status || 'null '}</td>
                  <td>
                    <Button className="admin-product-edit" onClick={() => EditBtn(item)} > Edit </Button>
                    <Button className="admin-product-delete" onClick={() => DeleteModalBtn(item)} >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}</section>

      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
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
            Do you want to Delete this Coupon ?
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
            onClick={DeleteBtn}
          >
            Yes,Delete
          </Button>
          <Button
            style={{ backgroundColor: "#304D30", border: "none" }}
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>


    </Container>
  );
};

export default AdminCoupons;
