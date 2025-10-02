// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import "../../styles/App.scss";
import {
  Card,
  ListGroup,
  Col,
  Row,
  Badge,
  ListGroupItem,
  Stack,
} from "react-bootstrap";
import { GiSkills } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { BsFiletypeScss, BsGit, BsGithub, BsFiletypeCss } from "react-icons/bs";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {FaAws} from 'react-icons/fa6'
import { PiFileSqlDuotone } from "react-icons/pi";
import {
  SiSpringboot,
  SiSpring,
  SiMysql,
  SiPostman,
  SiPython,
  SiGreensock,
} from "react-icons/si";
import { Java_svg } from "../../assets/SVG/Java_svg";

export const SkillSet = () => {
  return (
    <div id="skillset" className="skill-container justify-content-around bg-light bg-opacity-75">
      <div className="pb-5  text-black title ">
        Skill-Set
        <GiSkills className="ms-3" />
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col pb-5">
          <Card style={{ width: "100%" }} border="warning" className="border-4">
            <Card.Body>
              <Card.Title className="mx-auto">前端</Card.Title>

              <GrReactjs className="skill-icons text-primary" />
              <BiLogoTypescript className="skill-icons text-primary" />
              <RiJavascriptFill className="skill-icons text-warning" />
              <BsFiletypeCss className="skill-icons" />
              <BsFiletypeScss className="skill-icons" />
              <SiGreensock
                className="skill-icons"
                style={{ strokeWidth: "0.7px" }}
              />
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge>React 框架</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="dark">Typescript</Badge>
                  </Col>
                  <Col>
                    <Badge bg="dark">Javascript</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="secondary">CSS</Badge>
                  </Col>
                  <Col>
                    <Badge bg="secondary">SCSS</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="success">GSAP - 綠襪動畫</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col pb-4">
          <Card style={{ width: "100%" }} border="success" className="border-4">
            <Card.Body>
              <Card.Title className="mx-auto">後端</Card.Title>

              <Stack direction="horizontal" className="justify-content-center">
                <Java_svg/>
                {/* <FaJava className="skill-icons" /> */}
                <SiSpringboot className="skill-icons text-success ms-2" />
                <SiSpring className="skill-icons text-success" />
              </Stack>

            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge bg="warning" text="dark">
                  Java
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="success">Spring Boot</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="secondary">Spring Web</Badge>
                  </Col>
                  <Col>
                    <Badge bg="secondary">Spring Data JPA</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col pb-4">
          <Card style={{ width: "100%" }} border="primary" className="border-4">
            <Card.Body>
              <Card.Title className="mx-auto">資料庫</Card.Title>

              <SiMysql className="skill-icons text-primary" />
              <BiLogoPostgresql className="skill-icons text-primary" />
              <PiFileSqlDuotone className="skill-icons" />

            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge bg="primary">MySQL</Badge>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="info" text="dark">PostgreSQL</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Badge bg="secondary">SQL</Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="col pb-4">
          <Card
            style={{ width: "100%" }}
            border="dark"
            className="border-4"
          >
            <Card.Body>
              <Card.Title className="mx-auto">其他</Card.Title>

              <BsGithub className="skill-icons" />
              <BsGit className="skill-icons text-danger" />
              <FaAws className="skill-icons text-dark"/>
              <SiPostman className="skill-icons text-warning" />
              <SiPython className="skill-icons text-primary" />
            </Card.Body>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>
                  <Badge bg="dark">Github</Badge>
                  </Col>
                  <Col>
                  <Badge bg="danger">Git 版本控制</Badge>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <Badge bg="warning" text="dark">Amazon Web Services</Badge>
                  </Col>
                  <Col>
                    <Badge bg="secondary" text="light">Postman - API測試工具</Badge>
                  </Col>
                </Row>

              </ListGroupItem>
              <ListGroupItem>
                <Badge bg="info" text="dark">Python</Badge>

              </ListGroupItem>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
};
