/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "bootstrap/dist/css/bootstrap.min.css";
import { IndividualProduct } from "./IndividualProduct";
import "../../App.css";
import { FilterPanel } from "./FilterBox/FilterPanel";
import {BiSolidPurchaseTagAlt} from 'react-icons/bi'

export const Main = () => {
  return (
    <>
      <div className="home-container p-0 mt-3">
        <div className=" row ">
          <div className="col d-none d-sm-block col-lg-3">
            <FilterPanel />
          </div>
          <div className="col col-12 col-lg-9  bg-secondary-subtle rounded pt-4">
            <BiSolidPurchaseTagAlt fontSize="4rem" className="text-dark"/>
            <IndividualProduct />
          </div>
        </div>
      </div>
    </>
  );
};
