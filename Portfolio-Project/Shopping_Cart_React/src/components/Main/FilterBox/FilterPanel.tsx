// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { StarRating } from "./StarRating";
import { CartContext } from "../../Context/Context";

export const FilterPanel = () => {
  // const [rate,setRate] = useState<number>(3)

  const {
    filterState: { byStock, byRating, byDelivery, sort },
    filterDispatch,
  } = useContext(CartContext);

  return (
    <Form className="filter-form border border-3 border-black p-2 m-3 rounded mx-auto ">
      <div className="text fs-3 d-none d-sm-block filter-title">Products Filter</div>
      <Form.Check
        type="switch"
        id="Ascending"
        label="Ascending"
        checked={sort === "LOWTOHIGH" ? true : false}
        onChange={() => {
          filterDispatch({
            type: "SORT_BY_PRICE",
            payload: "LOWTOHIGH",
          });
        }}
        className="text text-start filter-tag text-success fs-5"
      />
      <Form.Check
        type="switch"
        label="Descending"
        id="Descending"
        checked={sort === "HIGHTOLOW" ? true : false}
        onChange={() => {
          filterDispatch({
            type: "SORT_BY_PRICE",
            payload: "HIGHTOLOW",
          });
        }}
        className="text text-start filter-tag text-danger fs-5"
      />
      <Form.Check
        type="checkbox"
        id="stock"
        label="Include Out of Stock."
        className="text text-start filter-tag"
        onChange={() => filterDispatch({ type: "SORT_BY_STOCKING" })}
        checked={byStock}
      />
      <Form.Check
        type="checkbox"
        id="delivery"
        label="Fast Delivery Only"
        className="text text-start filter-tag"
        onChange={() => filterDispatch({ type: "SORT_BY_DELIVERY" })}
        checked={byDelivery}
      />
      <div className="text text-start filter-tag">
        Rating:
        <StarRating
          rating={byRating}
          onClick={(i: React.SetStateAction<number>) =>
            filterDispatch({ type: "SORT_BY_RATING", payload: i + 1 })
          }
        />
      </div>

      <button
        type="button"
        className="btn btn-outline-danger d-block mx-auto "
        onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTER" })}
      >
        <strong>Clear All</strong>
      </button>
    </Form>
  );
};
