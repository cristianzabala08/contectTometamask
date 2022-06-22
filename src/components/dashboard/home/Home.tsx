import { Col, Container, Row } from "solid-bootstrap";
import { Component, createSignal } from "solid-js";
import "./style.css";
import { NFT__DATA } from "../../../assets/data/data";
import { NftCard } from "../../Nft-card/NftCard";

const Home: Component = () => {
  const [data, setData] = createSignal(NFT__DATA);

  // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
  const handleSort = (e: any) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );

      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
      );

      setData(filterData);
    }
  };

  const handleCategory = () => {};

  const handleItems = () => {};

  return (
   /*  <section id="services" class="services section-bg">
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
    </section> */

    <section>
        <Container>
          <Row>
            <Col lg="12" class="mb-5">
              <div class="market__product__filter d-flex align-items-center justify-content-between">
                <div class="filter__left d-flex align-items-center gap-5">
                  <div class="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div class="all__items__filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>

                <div class="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {data().map((item) => (
              <Col lg="3" md="4" sm="6" class="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export { Home as HomePages };
