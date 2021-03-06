import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import Canada from "../components/brokers/Canada";
import Europe from "../components/brokers/Europe";
import NavbarHeader from "../components/NavbarHeader";
import Restrictions from "../components/Restrictions";
import StockCard from "../components/StockCard";
import US from "../components/brokers/US";
import Logo from "../assets/img/WallStreetBets.png";
import Disclaimer from "../components/Disclaimer";
import Clock from "react-live-clock";
import News from "../components/News";
import MetaTickers from "../components/MetaTickers";
import ShortInt from "../components/ShortInt";
// wallet
import bitcoin from "../assets/wallet/bitcoin.png";
import eth from "../assets/wallet/ethereum.png";
import Updates from "../components/Updates";
const Landing = () => {
  return (
    <>
      <NavbarHeader />
      {/* <Meta /> */}
      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col lg="4">{/* empty */}</Col>
          <Col lg="4">
            <img src={Logo} alt="logo" />
          </Col>
          <Col lg="4">{/* empty */}</Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}>
              Ticker Dashboard{" "}
              <i style={{ color: "red" }} className="fas fa-rocket"></i>
            </h1>
            <h6 style={{ textAlign: "center" }}>
              {" "}
              Eastern/US Time:{" "}
              <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"US/Eastern"}
              />
              <Alert color="secondary">
                After Hours: Data comes straight from markets in NY. Note: If
                "Not Found" is displayed. Market Data has stopped. Live
                real-time data resumes at 4AM ET. Thank you.
              </Alert>
            </h6>
            {/* <p style={{ textAlign: "center" }}>
              *Note: Prices remain 0 until market opens. EST
            </p> */}
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Col lg="4">
            <StockCard tick="GME" />
          </Col>
          <Col lg="4">
            <StockCard tick="AMC" />
          </Col>
          <Col lg="4">
            <StockCard tick="NOK" />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <StockCard tick="BB" />
          </Col>
          <Col lg="4">
            <StockCard tick="BBBY" />
          </Col>
          <Col lg="4">
            <StockCard tick="MAC" />
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <ShortInt style={{ marginTop: "1rem" }} />
          </Col>
          <Col md="4">
            <div>
              <h5>Has the squeeze happened yet?</h5>
              <p>In my non-financial, personal opinion no.</p>
              <p>
                Bloomberg, CNBC, and other finacial media outlets are reporting
                it has or there won't be a squeeze as big as 2008. GME dropped
                significantly durring market hours and after hours on 2/1,
                however volume implies that a massive sell off did not occur.
                Significant claims of "short-ladder attacks" and news
                manipulation of silver prices riddled r/WSBs on Monday. VW in
                2008 had a similar dip before the squeeze, so it is possible it
                has not happend yet. Short interest information is hard to find
                and conflicts with reality. CNBC is running one story and r/WSB
                is running another. Impossible to tell who is right at this
                point.
              </p>
            </div>
          </Col>
          <Col md="4">
            <MetaTickers />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col lg="4" md="3" sm="2">
            <US />
          </Col>
          <Col lg="4" md="3" sm="2">
            <Canada />
          </Col>
          <Col lg="4" md="3" sm="2">
            <Europe />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col lg="12" md="12" sm="1">
            <Restrictions />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <News />
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Updates />
        </Row>
      </Container>
      <footer style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>
          If you enjoy this site please venmo{" "}
          <span style={{ color: "lightgreen" }}>@Owen-Roth</span> any ammount
          you please. Need to buy more GME!!!! To the MOON!!!
        </p>
        <p>
          Coded by{" "}
          <a
            href="https://github.com/oroth8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Owen Roth
          </a>
        </p>
        <p>
          Want to contribute? Post an issue? Please do so on the{" "}
          <a
            href="https://github.com/oroth8/wsb_tickers"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "lightgreen" }}
          >
            GitHub
          </a>{" "}
          page. Thank you!
        </p>
        <p>
          Please help me cover the market data fees to keep this site without
          ads and free. Donate whatever you can:
        </p>
        <Row
          className="wallet"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Col md="3"></Col>
          <Col md="3">
            <p>*Bitcoin*</p>
            <img
              src={bitcoin}
              alt="bitcoin"
              style={{ height: "150px", width: "150px" }}
            />
          </Col>
          <Col md="3">
            <p>*Ethereum*</p>{" "}
            <img
              src={eth}
              alt="eth"
              style={{ height: "150px", width: "150px" }}
            />
          </Col>
          <Col md="3"></Col>
        </Row>
        <Disclaimer />
      </footer>
    </>
  );
};

export default Landing;
