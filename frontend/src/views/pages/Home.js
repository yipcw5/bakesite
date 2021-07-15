import React from "react";
import classnames from "classnames";

import {
    Button,
    Container
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
                                <h1 className="mb-0 text-white">Bakesite</h1>
                                <Button color="primary" size="lg" type="button">Login/Register</Button>
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