import { Container, Row } from "react-bootstrap";
import "./Home.css";
import { FaReact } from "react-icons/fa";

function Home() {

    return <section>
        <Container >



            <Row>
                <div className="titles">
                    <h1>HOME</h1>
                    <div className="undline" >

                    </div>
                </div>
                <div className="home-center">

                    <h1>
                        This app was created using
                    </h1>
                </div></Row>
            <Row>
                <div className="col-lg-3">
                    <div className="card-body">
                        <div className="card"><div className="cardimg">
                            <span>
                                <FaReact />
                            </span>

                        </div>
                            <div className="cardbody"><h1>
                                React
                            </h1>
                            </div>
                        </div>




                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="card-body">
                        <div className="card"><div className="cardimg">
                            <span>
                                <FaReact />
                            </span>

                        </div>
                            <div className="cardbody"><h1>
                                React Bootstrap
                            </h1>
                            </div>
                        </div>




                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="card-body">
                        <div className="card"><div className="cardimg">
                            <span>
                                <FaReact />
                            </span>

                        </div>
                            <div className="cardbody"><h1>
                                React Router DOM
                            </h1>
                            </div>
                        </div>




                    </div>

                </div>
                <div className="col-lg-3">
                    <div className="card-body">
                        <div className="card"><div className="cardimg">
                            <span>
                                <FaReact />
                            </span>

                        </div>
                            <div className="cardbody"><h1>
                                React Icons
                            </h1>
                            </div>
                        </div>




                    </div>

                </div>

            </Row>






        </Container>

    </section>
}

export default Home;