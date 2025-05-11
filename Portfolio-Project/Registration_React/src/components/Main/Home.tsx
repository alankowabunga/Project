// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useContext, useEffect, useState } from "react";
import { Rows } from "./Rows";
import { Navbar } from "./Navbar";
import { useRef } from "react";
import gsap from "gsap";
import { Power3 } from "gsap";
import { FadeLoader } from "react-spinners";
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { InputContext } from "../Context/Context";
import {Modal} from 'react-bootstrap';

export const Home = () => {

  const {ShowError,setShowError} = useContext(InputContext);

  const handleClose = () => setShowError(false);

  useEffect(()=>{
    console.log(ShowError);
  },[ShowError])


  return (
    <div className="home">

      <Modal show={ShowError} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>資料請求發生錯誤</Modal.Body>
      </Modal>

      <Navbar />

      <table className="table table-bordered p-2 ">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>

            <th scope="col" className="hidden">Email</th>

            <th scope="col" >Action</th>
          </tr>
        </thead>
        <tbody>
          <Rows />
        </tbody>
      </table>
    </div>
  );
};
