// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import {useContext} from "react";
import { Col,  Image, Row } from "react-bootstrap";
import { IoTrashBinSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CartContext } from "../Context/Context";

export const CartList = ({ c }) => {

  const {dispatch} = useContext(CartContext);
  return (
    <Row  className="cartlist-row p-2 mb-2 border ">
      <Col xs={3}>
        <Image className="cart_image" src={c.image} roundedCircle />
      </Col>
      <Col xs={7}>
        <strong className="m-0 mt-1"> {c.name}</strong>
        <div className="cart_price mt-2">
          <RiMoneyDollarCircleFill className="text-warning" fontSize="24px"/> {c.price}
        </div>
      </Col>
      <Col xs={2} className="align-self-center">
        <IoTrashBinSharp onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:c})} className="me-1 trash-icon" fontSize="30px" />
      </Col>
    </Row>
  );
};
