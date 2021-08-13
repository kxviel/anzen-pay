import Image from "next/image";
import { useState } from "react";

interface Props {
  tabIndex: number;
}

const TabBody = (props: Props) => {
  const [selectedTabIndex, setTabIndex] = useState(0);
  const handleTab = (i) => {
    setTabIndex(i);
  };
  return (
    <div className="tab-body">
      {props.tabIndex === 0 && (
        <>
          <div className="card">
            {[7, 7, 7].map((_, i) => (
              <Image
                key={i}
                height="210"
                width="210"
                src={`/card${i}.svg`}
                alt=""
              />
            ))}
          </div>
          <div className="forms">
            <div className="formOne">
              <p>Credit Card</p>
              <input type="text" />
            </div>
            <div className="formOne">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="formTwo">
              <input type="text" placeholder="Expiry" />
              <input className="cvv" type="text" placeholder="CVV" />
            </div>
            <div className="button-grp">
              <button>Confirm Order</button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </>
      )}
      {props.tabIndex === 1 && (
        <>
          <div className="upi">
            <div className="card">
              {["Apple Pay", "Phone Pe", "Google Pay"].map((_, i) => (
                <div
                  onClick={() => handleTab(i)}
                  key={i}
                  className={selectedTabIndex === i ? "clicked" : "radio-div"}
                >
                  <Image
                    className="aa"
                    height="100"
                    width="100"
                    src={`/upi${i}.svg`}
                    alt=""
                  />
                  <h1>{_}</h1>
                  <button>Pay</button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default TabBody;
