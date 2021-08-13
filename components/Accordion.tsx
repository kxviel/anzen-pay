import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTabIndex, setTabIndex] = useState(0);
  const accordionData = [
    {
      title: "Prada",
      content: ["Leather mini-bag", "Delivery Fee", "Discount", "Total"],
      prices: ["$1850.00", "$370.00", "$0.00", "$2220.00"],
    },
    {
      title: "Vans",
      content: ["Casuals", "Delivery Fee", "Discount", "Total"],
      prices: ["$185.00", "$30.00", "$0.00", "$215.00"],
    },
    {
      title: "Hilfigger",
      content: ["T-Shirt", "Delivery Fee", "Discount", "Total"],
      prices: ["$350.00", "$210.00", "$5.00", "$455.00"],
    },
  ];

  return (
    <>
      {accordionData.map((x: any, i: number) => (
        <div key={i} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => {
              setIsActive(!isActive);
              setTabIndex(i);
            }}
          >
            <strong>{x.title}</strong>

            <div>{isActive && selectedTabIndex === i ? "-" : "+"}</div>
          </div>
          {isActive && selectedTabIndex === i && (
            <div className="accordion-content">
              <div className="subs">
                {x.content.map((data: any, j: number) => (
                  <p key={j}>{data}</p>
                ))}
              </div>

              <div className="costs">
                {x.prices.map((data: any, j: number) => (
                  <p key={j}>
                    <strong>{data}</strong>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
