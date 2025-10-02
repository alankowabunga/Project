// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useContext } from "react";
import {
  Container,
  Offcanvas,
  Navbar,
  Row,
  Col,
  Dropdown,
  Badge,
} from "react-bootstrap";
import "../../App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SearchBox } from "./SearchBox";
import { useTypewriter } from "react-simple-typewriter";
import { CartContext } from "../Context/Context";
import { CartList } from "./CartList";
import { HiOutlineArchive } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FilterPanel } from "../Main/FilterBox/FilterPanel";

export const NavBar = () => {

  const { state, dispatch } = useContext(CartContext);

  const cart = state.cart;

  return (
    <Navbar key="sm" expand="sm" className="bg-body-tertiary mb-3 ">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand className="text-decoration-underline brand">
          Ecommerce Shop
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Row className="w-100">
              <Col sm={{ span: 5, offset:3 }}className="text-center">

                {/* 自訂義的 search input */}
                <SearchBox className='d-none d-sm-block'/>
                <p className="d-sm-none">
                  <FilterPanel/>
                </p>

              </Col>
              <Col sm={{span:1,offset:1}}>
                <div className="container d-sm-none">
                {cart.length === 0 ? (
                      <Dropdown.Item className="bg-secondary-subtle rounded">
                        <strong>Empty Cart</strong>
                        <HiOutlineArchive className="ms-3" fontSize="22px" />
                      </Dropdown.Item>
                    ) : (
                      <Container>
                        {cart.map((c: any) => (
                          <CartList c={c}/>
                        ))}
                        <Row>
                          <Link to="./cartpage" className="btn btn-primary">
                            Go to Cart
                          </Link>
                        </Row>
                      </Container>
                    )}
                </div>
                <Dropdown drop="down" className="d-none d-sm-block">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <AiOutlineShoppingCart className="me-2" fontSize="26px"/>
                    <Badge bg="light" text="dark" className="badge " pill >
                      {state.cart.length}
                    </Badge>
                  </Dropdown.Toggle>
                  {/* 購物車下拉清單 */}
                  <Dropdown.Menu className="p-2">
                    {cart.length === 0 ? (
                      <Dropdown.Item className="bg-secondary-subtle rounded">
                        <strong>Empty Cart</strong>
                        <HiOutlineArchive className="ms-3" fontSize="22px" />
                      </Dropdown.Item>
                    ) : (
                      <Container>
                        {cart.map((c: any) => (
                          <CartList c={c}/>
                        ))}
                        <Row>
                          <Link to="./cartpage" className="btn btn-primary">
                            Go to Cart
                          </Link>
                        </Row>
                      </Container>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
