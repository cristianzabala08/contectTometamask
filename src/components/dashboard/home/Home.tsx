import { Col, Container, Row } from "solid-bootstrap";
import { Component } from "solid-js";
import "./style.css";

const Home: Component = () => {
    return (
        <section id="services" class="services section-bg">
            <Container fluid fade-up>
                <div class="section-title">
                    <h2>Services</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                        fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>

                <Row>
                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div class="icon-box">
                            <div class="icon">
                            <i class="fa fa-archive" aria-hidden="true"></i>
                            </div>
                            <h4>
                                <a href="">Lorem Ipsum</a>
                            </h4>
                            <p style={"color:black"}>
                                Voluptatum deleniti atque corrupti quos dolores et quas
                                molestias excepturi
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <div class="icon-box">
                            <div class="icon">
                            <i class="fa fa-file" aria-hidden="true"></i>
                            </div>
                            <h4>
                                <a href="">Sed ut perspici</a>
                            </h4>
                            <p style={"color:black"}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div class="icon-box">
                            <div class="icon">
                            <i class="fa fa-tachometer" aria-hidden="true"></i>
                            </div>
                            <h4>
                                <a href="">Magni Dolores</a>
                            </h4>
                            <p style={"color:black"}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <div class="icon-box">
                            <div class="icon">
                            <i class="fa fa-compress" aria-hidden="true"></i>
                            </div>
                            <h4>
                                <a href="">Nemo Enim</a>
                            </h4>
                            <p style={"color:black"}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div class="icon-box">
                            <div class="icon">
                                <i class="bx bxl-dribbble"></i>
                            </div>
                            <h4>
                                <a href="">Lorem Ipsum</a>
                            </h4>
                            <p style={"color:black"}>
                                Voluptatum deleniti atque corrupti quos dolores et quas
                                molestias excepturi
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <div class="icon-box">
                            <div class="icon">
                                <i class="bx bx-file"></i>
                            </div>
                            <h4>
                                <a href="">Sed ut perspici</a>
                            </h4>
                            <p style={"color:black"}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div class="icon-box">
                            <div class="icon">
                                <i class="bx bx-tachometer"></i>
                            </div>
                            <h4>
                                <a href="">Magni Dolores</a>
                            </h4>
                            <p style={"color:black"}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia
                            </p>
                        </div>
                    </div>

                    <div
                        class="col-xl-3 col-md-6 d-flex align-items-stretch mt-3"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <div class="icon-box">
                            <div class="icon">
                                <i class="bx bx-layer"></i>
                            </div>
                            <h4>
                                <a href="">Nemo Enim</a>
                            </h4>
                            <p style={"color:black"}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export { Home as HomePages };
