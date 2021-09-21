import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import {
    Button,
    Container,
    Col,
    Row
} from "reactstrap";

class Home extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        //this.refs.main.scrollTop = 0;
    }
    render() {
        return(
            <main ref="main">
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250"> {/* Top padding */}
                        <div className="shape shape-style-1 shape-default"> {/* Add background colour */}
                            <span /> {/* randomly-positioned bubbles */}
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="py-lg-md d-flex"> {/* Side padding + heading/paragraph split side by side */}
                            <div className="col px-0"> {/* Put paragraph below heading */}
                            <Container className="shape-container d-flex align-items-center py-lg"> {/* Center paddings: */}
                            <div className="col px-0">
                            <Row className="align-items-center justify-content-center">
                                <Col className="text-center" lg="6">
                                    <h1 className="display-1 mb-0 text-white">Bakesite</h1>
                                    <br/>
                                    <Button color="neutral" size="lg" type="button" to="/login" tag={Link}>Login/Register</Button>
                                </Col>
                            </Row>
                            </div>
                            </Container>
                                <p className="lead text-white">
                                    A blog full of recipes that...
                                    <ul>
                                        <li>have already been tested & tried by out user community</li>
                                        <li>have streamlined measurements adjusted to your liking - it'll save somewashing up, trust</li>
                                        <li>lets you adjust measurements by number of servings - mentally calculating 5 servings from a 12-serving recipe can be a pain</li>
                                        <li>lets you add your own!</li>
                                    </ul>
                                    Sign up for a <strong>free</strong> account and you'll get all of the above.
                                </p>
                            </div>
                        </Container>
                    </section>
                </div>
            </main>
        );
    }
}

export default Home;