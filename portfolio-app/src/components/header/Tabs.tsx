import {MdOutlineMailOutline} from 'react-icons/md'
import '.././../styles/App.scss'
import { Nav } from "react-bootstrap";

export const Tabs = () => {
  return (
    <Nav className="justify-content-evenly" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="nav-text">About me </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="nav-text">Portfolio </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="nav-text">Contact <MdOutlineMailOutline/>
          </Nav.Link>
        </Nav.Item>
      </Nav>
  );
};
