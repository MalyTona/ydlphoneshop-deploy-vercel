import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
// If using lucide-react consistently as in FeaturedProducts:
// import { Trash2 } from 'lucide-react';
// Otherwise, ensure Font Awesome is set up for <i className="fa fa-trash-alt"></i>

// Placeholder function - in a real app, these would come from props and update state
const handleQuantityChange = (productId, newQuantity) => {
  console.log(`Product ID: ${productId}, New Quantity: ${newQuantity}`);
};

const handleRemoveItem = (productId) => {
  console.log(`Remove Product ID: ${productId}`);
};

const CartItem = ({ item }) => {
  if (!item) {
    return null; // Or some placeholder if an item is unexpectedly missing
  }

  return (
    <Card className="mb-3">
      {" "}
      {/* Added margin-bottom for spacing between items */}
      <Card.Body>
        <Row className="align-items-center">
          {" "}
          {/* Use align-items-center for better vertical alignment */}
          <Col md={3} lg={2} sm={4} xs={4} className="mb-2 mb-sm-0">
            <img
              className="cart-product-img img-fluid" // img-fluid is better than w-100 h-100 for responsive images
              src={item.image}
              alt={item.name}
              style={{ maxHeight: "100px", objectFit: "contain" }} // Added inline style for better control, or use CSS class
            />
          </Col>
          <Col md={5} lg={6} sm={8} xs={8} className="mb-2 mb-md-0">
            <h5 className="product-name mb-1">{item.name}</h5>
            <small>Unit Price: ${item.unitPrice}</small>
            <br />
            <small>Total: ${item.unitPrice * item.quantity}</small>
          </Col>
          <Col md={4} lg={4} sm={12} xs={12} className="mt-2 mt-md-0">
            <Row className="align-items-center">
              <Col xs={7} sm={7} md={7}>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  min="1"
                  className="text-center"
                  size="sm"
                />
              </Col>
              <Col xs={5} sm={5} md={5} className="ps-0">
                {" "}
                {/* ps-0 to reduce padding */}
                <Button
                  variant="outline-danger" // More semantic variant for remove
                  size="sm"
                  className="w-100"
                  onClick={() => handleRemoveItem(item.id)}
                  title="Remove Item"
                >
                  {/* <Trash2 size={16} /> Using lucide-react icon */}
                  <i className="fa fa-trash-alt"></i> {/* Using Font Awesome */}
                  {/* <span className="d-none d-md-inline"> Remove</span> Optionally hide text on small screens */}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
