import "../../styles/App.scss";
import { BsPhoneVibrate } from "react-icons/bs";
import { LuMails } from "react-icons/lu";
import { Line_svg } from "../../assets/SVG/Line_svg";
import { Github_svg } from "../../assets/SVG/Github_svg";
import { useState } from "react";
import { Badge, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import img from '../../assets/Image/Line_QRCode.jpg'

export const Footer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="contact" className="footer-section">
            <div className="footer-container">
                <h1 className="footer-title mx-auto">Let's Work Together</h1>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4 order-1 order-md-1">

                        <div className="row row-cols-1">
                            <div className="col mb-5">
                                <BsPhoneVibrate fontSize="2rem" className="mx-3" />
                                <span className="info-text fs-5 fw-bolder align-middle">
                                    0963 607 262
                                </span>
                            </div>
                            <div className="col">
                                <LuMails fontSize="2rem" className="mx-3" />
                                <span className="info-text fs-5 fw-bolder align-middle">
                                    chenyujen0218@gmail.com
                                </span>
                            </div>
                        </div>



                    </div>
                    <div className="col mb-4 order-2 order-md-3">

                        <div className="row row-cols-2 row-cols-md-1">
                            <div className="col order-3">
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                >
                                    <Modal.Header className="bg-success text-white" closeButton>
                                        <Modal.Title>Line Add Friend</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ListGroup>
                                            <ListGroup.Item className="d-flex justify-content-center">
                                                <img src={img} style={{ width: "300px" }} />
                                            </ListGroup.Item>
                                            <ListGroupItem className="fs-5">
                                                <Badge pill className="me-2">ID</Badge>firextinguisher
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Modal.Body>
                                </Modal>
                                <p onClick={handleShow} className="lineP mx-auto">
                                    <Line_svg />
                                </p>
                            </div>
                            <div className="col  mb-4">
                                <a href="https://github.com/alankowabunga" target="_blank">
                                    {" "}
                                    <Github_svg />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
