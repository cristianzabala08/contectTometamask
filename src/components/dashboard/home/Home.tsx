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

    switch (filterValue) {
      case "high":
        {
          const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);
          setData(filterData);
        }
        break;
      case "mid":
        {
          const filterData = NFT__DATA.filter(
            (item) => item.currentBid >= 5.5 && item.currentBid < 6
          );
          setData(filterData);
        }
        break;
      case "low":
        {
          const filterData = NFT__DATA.filter(
            (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
          );
          setData(filterData);
        }
        break;
      default:
        {
          setData(NFT__DATA);
        }
        break;
    }
  };

  const handleCategory = () => {};

  const handleItems = () => {};

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" class="mb-5">
            <div class="market__product__filter d-flex align-items-center justify-content-between">
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
