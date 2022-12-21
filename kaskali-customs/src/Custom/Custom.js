import axios from "axios";
import React, { useState } from "react";
import "./Custom.css";

function Custom() {
  const [frameColor, setFrameColor] = useState("black");
  const [gripColor, setGripColor] = useState("black");
  const [backRimColor, setBackRimColor] = useState("black");
  const [frontRimColor, setFrontRimColor] = useState("black");
  const [chainColor, setChainColor] = useState("black");
  const [tireColor, setTireColor] = useState("black");

  const [showFrames, setShowFrames] = useState(true);
  const [showGrips, setShowGrips] = useState(false);
  const [showBackRims, setShowBackRims] = useState(false);
  const [showFrontRims, setShowFrontRims] = useState(false);
  const [showChains, setShowChains] = useState(false);
  const [showTires, setShowTires] = useState(false);

  const rims = ["black", "silver", "white", "blue", "red"];

  let defaultValue = 250;

  const finalProduct = {
    backRim: backRimColor,
    chain: chainColor,
    frame: frameColor,
    frontRim: frontRimColor,
    grip: gripColor,
    tire: tireColor,
  };

  const addCustomToCart = async () => {
    await axios.post("http://localhost:5000/api/import/custom", {
      data: finalProduct,
    });
  };

  const updatePrice = () => {
    let updatePrice = defaultValue;
    updatePrice += frameColor != "black" ? 10 : 0;
    updatePrice += gripColor != "black" ? 10 : 0;
    updatePrice += backRimColor != "black" ? 10 : 0;
    updatePrice += chainColor != "black" ? 10 : 0;
    updatePrice += tireColor != "black" ? 10 : 0;
    updatePrice += frontRimColor != "black" ? 10 : 0;
    return updatePrice;
  };

  return (
    <div className="parent">
      <section className="cardBike">
        <div className="cardprice">
          {frameColor != "black" ? (
            <div className="priceText">Total Price: ${updatePrice()}</div>
          ) : (
            <div className="priceText">Total Price: ${updatePrice()}</div>
          )}
          <div className="orderText">
            <button className="orderBtn" onClick={() => addCustomToCart()}>
              Place Order
            </button>
          </div>
        </div>
        <div>
          <img
            className="grips"
            src={require(`../imgs/grips/grip_riser_${gripColor}.png`)}
          ></img>
        </div>
        <div>
          <img
            className="base"
            id="tires"
            src={require(`../imgs/tires/tires_${tireColor}.png`)}
          ></img>
        </div>
        <div>
          <img
            className="base"
            src={require(`../imgs/base/components_black_0.png`)}
          ></img>
        </div>
        <div>
          <img
            className="base"
            src={require(`../imgs/base/handlebar_riser_silver_0.png`)}
          ></img>
        </div>
        <div>
          <img
            className="base"
            src={require(`../imgs/saddle/saddle_no_upgrade.png`)}
          ></img>
        </div>
        <div>
          <img
            className="base"
            src={require(`../imgs/chains/chain_${chainColor}.png`)}
          ></img>
        </div>
        <div>
          <img
            className="rim1"
            src={require(`../imgs/rims/rim_front_${frontRimColor}.png`)}
          ></img>
        </div>
        <div>
          <img
            className="rim2"
            src={require(`../imgs/rims/rim_back_${backRimColor}.png`)}
          ></img>
        </div>
        <div>
          <img
            className="frame"
            src={require(`../imgs/frames/frame_${frameColor}_0.png`)}
          ></img>
        </div>
      </section>
      <section className="options-parent">
        <div className="optionBtnsParent">
          <button
            className="optionBtns"
            onClick={() => {
              if (!showFrames) {
                setShowFrames(true);
                setShowGrips(false);
                setShowFrontRims(false);
                setShowBackRims(false);
                setShowChains(false);
                setShowTires(false);
              }
            }}
          >
            Frame Color
          </button>
          <button
            className="optionBtns"
            onClick={() => {
              if (!showChains) {
                setShowChains(true);
                setShowGrips(false);
                setShowFrontRims(false);
                setShowBackRims(false);
                setShowFrames(false);
                setShowTires(false);
              }
            }}
          >
            Chain Color
          </button>
          <button
            className="optionBtns"
            onClick={() => {
              if (!showGrips) {
                setShowGrips(true);
                setShowFrames(false);
                setShowFrontRims(false);
                setShowBackRims(false);
                setShowChains(false);
                setShowTires(false);
              }
            }}
          >
            Grip Color
          </button>
          <button
            className="optionBtns"
            onClick={() => {
              if (!showTires) {
                setShowTires(true);
                setShowGrips(false);
                setShowFrames(false);
                setShowFrontRims(false);
                setShowBackRims(false);
                setShowChains(false);
              }
            }}
          >
            Tire Color
          </button>
          <button
            className="optionBtns"
            onClick={() => {
              if (!showBackRims) {
                setShowBackRims(true);
                setShowGrips(false);
                setShowFrames(false);
                setShowFrontRims(false);
                setShowChains(false);
                setShowTires(false);
              }
            }}
          >
            Back Rim Color
          </button>
          <button
            className="optionBtns"
            onClick={() => {
              if (!showFrontRims) {
                setShowFrontRims(true);
                setShowGrips(false);
                setShowFrames(false);
                setShowBackRims(false);
                setShowChains(false);
                setShowTires(false);
              }
            }}
          >
            Front Rim Color
          </button>
        </div>
        <div className="cardBtn" id="frameBtn">
          <div className={showFrames ? "unhidden" : "hide"}>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(77,37,78)",
                }}
              >
                purple
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "#F8CD38",
                }}
              >
                yellow
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "#A4C2A0",
                }}
              >
                mint
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(40,40,40)",
                }}
              >
                black
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(232,232,232)",
                }}
              >
                white
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(37,50,100)",
                }}
              >
                cobalt
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(103,112,127)",
                }}
              >
                anthracite
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "#E34B26",
                }}
              >
                red
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(254,142,18)",
                }}
              >
                orange
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(9,74,45)",
                }}
              >
                green
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(123,175,175)",
                }}
              >
                celeste
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrameColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(160,200,230)",
                }}
              >
                sky
              </button>
            </div>
          </div>
        </div>
        <div className="cardBtn" id="gripBtn">
          <div className={showGrips ? "unhidden" : "hide"}>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(50,50,50)",
                }}
              >
                black
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(63,140,208)",
                }}
              >
                blue
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(151,130,109)",
                }}
              >
                brown
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(124,189,85)",
                }}
              >
                green
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(237,133,79)",
                }}
              >
                orange
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(218,167,196)",
                }}
              >
                pink
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(104,107,175)",
                }}
              >
                purple
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(208,91,95)",
                }}
              >
                red
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(226,226,226)",
                }}
              >
                white
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setGripColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(244,215,81)",
                }}
              >
                yellow
              </button>
            </div>
          </div>
        </div>
        <div className="cardBtn" id="chainBtn">
          <div className={showChains ? "unhidden" : "hide"}>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(208,193,80)",
                }}
              >
                yellow
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(73,73,73)",
                }}
              >
                black
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(54,67,163)",
                }}
              >
                blue
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(137,177,60)",
                }}
              >
                green
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(204,114,34)",
                }}
              >
                orange
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(207,73,118)",
                }}
              >
                pink
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(114,58,122)",
                }}
              >
                purple
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(186,61,60)",
                }}
              >
                red
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setChainColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(202,202,202)",
                }}
              >
                silver
              </button>
            </div>
          </div>
        </div>
        <div className="cardBtn" id="rimoneBtn">
          <div className={showBackRims ? "unhidden" : "hide"}>
            {rims.map((rim) => (
              <div className="borderBtn">
                <button
                  className="bikeBtn"
                  onClick={(e) => setBackRimColor(e.target.innerText)}
                >
                  {rim}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="cardBtn" id="rimoneBtn">
          <div className={showTires ? "unhidden" : "hide"}>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setTireColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(53,94,201)",
                }}
              >
                blue
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setTireColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(36,36,36)",
                }}
              >
                black
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setTireColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(225,64,17)",
                }}
              >
                red
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setTireColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(232,199,21)",
                }}
              >
                yellow
              </button>
            </div>
          </div>
        </div>
        <div className="cardBtn" id="rimtwoBtn">
          <div className={showFrontRims ? "unhidden" : "hide"}>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrontRimColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(13,13,13)",
                }}
              >
                black
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrontRimColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(163,163,163)",
                }}
              >
                silver
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrontRimColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(224,224,224)",
                }}
              >
                white
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrontRimColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(19,26,81)",
                }}
              >
                blue
              </button>
            </div>
            <div className="borderBtn">
              <button
                className="bikeBtn"
                onClick={(e) => setFrontRimColor(e.target.innerText)}
                style={{
                  backgroundColor: "rgb(135,32,32)",
                }}
              >
                red
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Custom;
