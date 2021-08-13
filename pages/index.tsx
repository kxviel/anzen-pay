import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Header from "../components/MyHeader";
import TabBody from "../components/TabBody";

const Home: NextPage = () => {
  const [selectedTabIndex, setTabIndex] = useState(0);

  const handleTab = (i: number) => {
    setTabIndex(i);
  };
  return (
    <>
      <Head>
        <title>Anzen Pay</title>
      </Head>

      <div className="root">
        <div className="content">
          <div className="left">
            <Header />
            <div className="tabs">
              {["Credit Card", "UPI"].map((data, index) => (
                <p
                  key={index}
                  onClick={() => handleTab(index)}
                  className={selectedTabIndex === index ? "clicked" : ""}
                >
                  {data}
                </p>
              ))}
            </div>
            <TabBody tabIndex={selectedTabIndex} />
          </div>
          <div className="right">
            <div className="headings">
              <h2>ORDER SUMMARY</h2>
              <div className="crumbs">
                <span>Shipping</span>
                <span>&gt;</span>
                <strong>Payment</strong>
                <span>&gt;</span>
                <span>Review</span>
              </div>
            </div>
            <div className="accordion">
              <Accordion />
            </div>
            <div className="total">
              <h2>Total</h2>
              <h1>$2890.00</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
