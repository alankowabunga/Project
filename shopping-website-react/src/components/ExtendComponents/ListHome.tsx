// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { useContext, useEffect, useState } from "react";
import { ListGroup, Image, Form } from "react-bootstrap";
import { CartContext } from "../Context/Context";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import { StarRating } from "../Main/FilterBox/StarRating";

export const ListHome = () => {
  const { state, dispatch } = useContext(CartContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(state.cart);
  }, [state]);

  return (
    <>
      {cart.length === 0 ? (
        <Link to="/" className="text-decoration-none">
          <div className=" p-3 border border-2 text-black border-secondary">
            <h2>Nothing in the Cart</h2>
            <MdProductionQuantityLimits fontSize="120px" />
            <h3>Go Back Shopping</h3>
          </div>
        </Link>
      ) : (
        <>
          <ListGroup className="border border-2 border-dark">
            <h4 className="select-title text-decoration-underline">
              Selected Items
            </h4>
            {cart.map(
              (c: {
                image: string | undefined;
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      | string
                      | React.JSXElementConstructor<any /* eslint-disable @typescript-eslint/no-unused-vars */>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
                price:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      | string
                      | React.JSXElementConstructor<any /* eslint-disable @typescript-eslint/no-unused-vars */>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <ListGroup.Item className="m-2">
                  <div className="row row-cols-3  row-cols-md-4 row-cols-lg-5">
                    <div className="col d-none d-md-block">
                      <Image
                        src={c.image}
                        roundedCircle
                        style={{ width: "80px" }}
                      />
                    </div>
                    <div className="col col-4">
                      <strong>{c.name}</strong>
                      <div className="cart_price mt-2">
                        <RiMoneyDollarCircleFill
                          className="text-warning"
                          fontSize="24px"
                        />
                        {c.price}
                      </div>
                    </div>
                    <div className="col col-4">
                      <Form.Select
                        value={c.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: c.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(c.inStock).keys()].map((k) => (
                          <option key={k}>{k + 1}</option>
                        ))}
                      </Form.Select>
                    </div>
                    <div className="col d-none d-lg-block">
                      <StarRating rating={c.rating} onClick={undefined}/>
                    </div>
                    <div className="col col-1 align-self-center">
                      <IoTrashBinSharp
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: c })
                        }
                        className="me-1 trash-icon"
                        fontSize="30px"
                      />
                    </div>
                  </div>
                </ListGroup.Item>
              )
            )}
          </ListGroup>
        </>
      )}
    </>
  );
};
