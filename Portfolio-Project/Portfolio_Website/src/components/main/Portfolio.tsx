// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import '../../styles/App.scss'
import shoppingCart from '../../assets/Image/shopping_Cart.png';
import todoList from '../../assets/Image/Todo_List.png';
import Personnel from '../../assets/Image/Personnel_Info.png';
import { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Button, Card, Modal } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi'
import { BsFillInfoSquareFill, BsFillBootstrapFill } from 'react-icons/bs'
import { FaGithub, FaReact, FaAws } from 'react-icons/fa6'
import { SiSpringboot, SiMysql } from 'react-icons/si'

export const Portfolio = () => {

  let triggerRef = useRef(null);

  const tl = useRef();
  // reveal effect
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerRef,
          start: "top 50%"
        }
      })
      .to('.container', { duration: 0.2, css: { visibility: "visible" } })
      .to('.after', { duration: 2, width: "0%", ease: Power2.easeInOut }, "reveal")
      .fromTo('.bg-img', { scale: 1.8 }, { duration: 2, scale: 1 }, "reveal")

    return () => tl.current.kill();
  }, []);


  // Modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <div id='portfolio' className="portfolio-container p-3 ">
      <div className="row row-cols-1 row-cols-xxl-2 ">
        <h1 className='mx-auto' ref={(el: any) => triggerRef = el} >{`</> `}Portfolio</h1>
        <div className="col">

          <Card className='mx-auto bg-body-secondary'>
            <Card.Header as="h2">人員資料網站</Card.Header>

            <div className="container">

              <a href="https://github.com/alankowabunga/React/tree/master/Portfolio_Projects/Registration_React" target='_blank'>
                <FaGithub className="github-link text-black bg-light rounded" fontSize="1.6rem" />
              </a>

              <BsFillInfoSquareFill className='web-info text-success border-3 bg-white' fontSize="1.6rem" onClick={handleShow} />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <FaReact className="text-info ms-4" fontSize="2.2rem" />
                    <SiSpringboot className="text-success ms-4" fontSize="2.2rem" />
                    <SiMysql className="text-primary ms-4" fontSize="2.2rem" />
                    <FaAws className="text-dark ms-4" fontSize="2.2rem" />
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  此專案中後端我使用 Spring Boot框架、關聯式資料庫 MySQL。主頁的背景使用 Particles.js 的動畫特效增加生動感覺，組件樣式由 React-Bootstrap 去做微調，使用 Java 語言開發簡單的 Spring Boot 後端程式實現業務邏輯處理、並連接 MySQL 資料庫。最後將整個全端應用程式部屬到 AWS 雲端的虛擬伺服器。
                </Modal.Body>
                <Modal.Footer>
                  <a href='http://register-project-bucket.s3-website-us-east-1.amazonaws.com/' target='_blank'>
                    <Button variant="dark" onClick={handleClose}>
                      Visit Site
                      <FiExternalLink className="ms-2" fontSize="1.3rem" />
                    </Button>
                  </a>
                </Modal.Footer>
              </Modal>



              <a href='http://register-project-bucket.s3-website-us-east-1.amazonaws.com/' target='_blank'>
                <FiExternalLink className='ex-link bg-primary text-white rounded p-1' fontSize="1.6rem" />
              </a>

              <div className="img-container mx-auto ">

                <Card.Img src={Personnel} className="bg-img" />

                <div className="after"></div>
              </div>
            </div>
          </Card>
        </div> {/* Registration System*/}


        <div className="col">

          <Card className='mx-auto bg-body-secondary'>
            <Card.Header as="h2">購物網站</Card.Header>

            <div className="container">

              <a href="https://github.com/alankowabunga/React/tree/master/Portfolio_Projects/Shopping_Cart_React" target='_blank'>
                <FaGithub className="github-link text-black bg-light rounded" fontSize="1.6rem" />
              </a>

              <BsFillInfoSquareFill className='web-info text-success border-3 bg-white' fontSize="1.6rem" onClick={handleShow2} />
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <FaReact className="text-info ms-4" fontSize="2.2rem" />
                    <BsFillBootstrapFill className="text-primary ms-4" fontSize="2.2rem" />
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  此專案我前端使用 React.js 框架，將 Bootstrap 工具快速製成的元件像拼圖一樣組成一幅畫面，並運用能處理複雜狀態的 useReducer Hook 和能在整個專案中傳遞狀態的 useContext Hook ，使我發現其他作品的程式碼能更優化、精簡。最後將網站部屬到 Netlify 為靜態網站。
                </Modal.Body>
                <Modal.Footer>
                  <a href='https://64e63368b36fbf076d152764--jolly-begonia-7a7e37.netlify.app/' target='_blank'>
                    <Button variant="dark" onClick={handleClose2}>
                      Visit Site
                      <FiExternalLink className="ms-2" fontSize="1.3rem" />
                    </Button>
                  </a>
                </Modal.Footer>
              </Modal>



              <a href='https://64e63368b36fbf076d152764--jolly-begonia-7a7e37.netlify.app/' target='_blank'>
                <FiExternalLink className='ex-link bg-primary text-white rounded p-1' fontSize="1.6rem" />
              </a>

              <div className="img-container mx-auto ">

                <Card.Img src={shoppingCart} className="bg-img" />

                <div className="after"></div>
              </div>
            </div>
          </Card>
        </div> {/*shopping cart*/}

        <div className="col">

          <Card className='mx-auto bg-body-secondary'>
            <Card.Header as="h2">備忘錄</Card.Header>

            <div className="container">

              <a href="https://github.com/alankowabunga/React/tree/master/Portfolio_Projects/Todo_List_React" target='_blank'>
                <FaGithub className="github-link text-black bg-light rounded" fontSize="1.6rem" />
              </a>

              <BsFillInfoSquareFill className='web-info text-success border-3 bg-white' fontSize="1.6rem" onClick={handleShow3} />
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <FaReact className="text-info ms-4" fontSize="2.2rem" />
                    {/* <SiSpringboot className="text-success ms-4" fontSize="2.2rem" />
                    <SiMysql className="text-primary ms-4" fontSize="2.2rem" /> */}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  這是我第一個使用 React.js 元件式開發的專案，理解 React 的邏輯和各項 Hooks 使用方式，運用 props 跟 state 完成的待辦事項應用程式。
                </Modal.Body>
                <Modal.Footer>
                  <a href='https://64e6d66715a4493879746195--moonlit-lamington-2c8cfd.netlify.app/' target='_blank'>
                    <Button variant="dark" onClick={handleClose3}>
                      Visit Site
                      <FiExternalLink className="ms-2" fontSize="1.3rem" />
                    </Button>
                  </a>
                </Modal.Footer>
              </Modal>



              <a href='https://64e6d66715a4493879746195--moonlit-lamington-2c8cfd.netlify.app/' target='_blank'>
                <FiExternalLink className='ex-link bg-primary text-white rounded p-1' fontSize="1.6rem" />
              </a>

              <div className="img-container mx-auto ">

                <Card.Img src={todoList} className="bg-img" />

                <div className="after"></div>
              </div>
            </div>
          </Card>
        </div> {/*To-Do List*/}

      </div>
    </div>
  )
}
