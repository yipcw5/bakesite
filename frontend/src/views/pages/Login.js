import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import {
    Button,
    Container,
    Col,
    Row,
    Card,
    CardHeader,
    CardBody
} from "reactstrap";

class Login extends React.Component {
    state = {};
    render() {
        return(
            <section className="section section-lg section-shaped">
                <div className="shape shape-style-1 shape-default">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className="py-md"> {/* left padding */}
                    <Row className="row-grid justify-content-between align-items-center">
                        <Col className="mb-lg-auto" lg="5">
                            <Card>
                                <CardHeader className="bg-white pb-5">
                                <div className="text-center">
                                    <small>Sign in with</small>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()} 
                                    >
                                        <span className="btn-inner--icon mr-1">
                                            <img
                                            alt="..."
                                            src={require("assets/img/icons/common/github.svg")}
                                            />
                                        </span>
                                        <span className="btn-inner--text">Github</span>
                                    </Button>
                                    <Button
                                    className="btn-neutral btn-icon"
                                    color="default"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    >
                                        <span className="btn-inner--icon mr-1">
                                            <img
                                            alt="..."
                                            src={require("assets/img/icons/common/google.svg")}
                                            />
                                        </span>
                                        <span className="btn-inner--text">Google</span>
                                    </Button>
                                </div>
                                </CardHeader>
                                <CardBody>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Login;