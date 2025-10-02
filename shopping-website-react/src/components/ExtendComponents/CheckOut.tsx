// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Context";
import { Card, Carousel, ListGroup, Image } from "react-bootstrap";
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { BsCashCoin } from 'react-icons/bs'
import { Link } from "react-router-dom";

export const CheckOut = () => {
  const { state, dispatch } = useContext(CartContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(state.cart);
  }, [state]);

  // console.log(cart[1].qty)
  return (
    <>
      <Card style={{ width: "18rem" }} className="checkout-card border border-3 border-primary mb-4">
        <Carousel>
          {cart.map((c, index) => (
            <Carousel.Item key={index} interval={2000}>
              <Image className="checkout-image" src={c.image} />
              <Carousel.Caption>
                <h5>{c.name}</h5>
                <p><RiMoneyDollarCircleFill
                  className="text-warning"
                  fontSize="24px"
                />{c.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <Card.Body>
          <Card.Title className="text-decoration-underline fs-2 check-title"><BsCashCoin className="text-warning me-2" fontSize="28px" />Check</Card.Title>
          <Card.Text className="fs-5 pt-2 check-text">
            Total Amount: $ {cart.reduce((accu, curr) => accu + Number(curr.price * curr.qty), 0)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="fs-5 check-text">Total Commodity: {cart.length <= 1 ? (`${cart.length} item`) : (`${cart.length} items`)}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="/checkout" className="btn btn-outline-success border-3 fw-bold">Proceed to Checkout</Link>
        </Card.Body>
      </Card>
    </>
  );
};
