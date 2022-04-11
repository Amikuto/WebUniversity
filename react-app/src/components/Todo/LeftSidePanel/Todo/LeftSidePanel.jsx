import React from "react";
import {Nav} from "react-bootstrap";
import "../../../../styles/Dashboard.css"
import {Container, Row, Col, Card, Form, Button} from "react-bootstrap";
import TaskItem from "../../TaskItem";

const LeftSidePanel = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={1} id="sidebar-wrapper">
                        <Nav className="col-md-2 d-none d-md-block sidebar"
                             activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">личные</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="link-1">работа</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="link-2">учеба</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="disabled">отдых</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    {/*<Col xs={10} id="page-content-wrapper">*/}
                    {/*    <TaskItem task={{id: 1, title: "Main Todo", body: "Сделать домашку!"}}/>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
        </div>
    );
};

export default LeftSidePanel;