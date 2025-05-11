// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import  { useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../Context/Context";
import { Badge, Button, Card, ListGroup, Toast } from "react-bootstrap";
import "../../App.css";
import { FaTruckFast } from "react-icons/fa6";
import { StarRating } from "./FilterBox/StarRating";
import { BsCartPlus, BsCartX } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useEffect } from "react";

export const IndividualProduct = () => {
  const {
    state: { products, cart },
    dispatch,
    filterState: { byStock, byDelivery, byRating, sort, searchQuery },
    filterDispatch,
  } = useContext(CartContext);

  const filterProducts = () => {
    let filterItems = products;
    if (sort) {
      filterItems = filterItems.sort((a: number, b: number) =>
        sort === "LOWTOHIGH" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      filterItems = filterItems.filter(
        (item: { inStock: any }) => item.inStock
      );
    }
    if (byDelivery) {
      filterItems = filterItems.filter(
        (item: { fastDelivery: any }) => item.fastDelivery
      );
    }
    if (byRating) {
      filterItems = filterItems.filter(
        (item: { rating: number }) => item.rating == byRating
      );
    }
    if (searchQuery) {
      filterItems = filterItems.filter(
        (item: { name: string; searchQuery: string }) => 
          item.name.toLowerCase().includes(String(searchQuery).toLowerCase())
      );
    }
    return filterItems;
  };

  return (
    <div className="container text mx-auto mt-2 ">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4">
        {filterProducts().map((item: any, index: any) => (
          <div className="col mb-5" key={index}>
            <Card
              style={{ width: "18rem" }}
              className={`${!item.inStock && "noStock"} mx-auto`}
            >
              {item.fastDelivery && (
                <FaTruckFast className="fast-icon rounded border border-2 border-warning text-dark bg-light" />
              )}

              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title className="text-center p-2">{item.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="text-center p-2 ">
                  <RiMoneyDollarCircleFill
                    fontSize="25px"
                    className="text-warning"
                  />{" "}
                  <strong>{item.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="text-center p-2">
                  {item.fastDelivery ? (
                    <p className=" fast-text m-0">Fast Delivery</p>
                  ) : (
                    "4 Days Delivery"
                  )}
                </ListGroup.Item>
                <ListGroup.Item
                  className={`text-center p-2 ${!item.inStock && "noStock"}`}
                >
                  Instock:{" "}
                  <Badge className={!item.inStock && "bg-danger"}>
                    {item.inStock}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="text-center p-2">
                  <StarRating rating={item.rating} onClick={undefined} />
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                {cart.some((c: { id: any }) => c.id === item.id) ? (
                  <Button
                    variant="danger"
                    disabled={item.inStock === 0 && "true"}
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: item });
                    }}
                  >
                    <BsCartX fontSize="25px" />
                    <p style={{ margin: 0 }}> Remove to Cart</p>
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    className="cart-button"
                    disabled={item.inStock === 0 && "true"}
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: item });
                    }}
                  >
                    <BsCartPlus fontSize="25px" />
                    <p style={{ margin: 0 }}> Add to Cart</p>
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
