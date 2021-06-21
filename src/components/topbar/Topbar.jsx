import React from "react";
import './topbar.scss'
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import TextTransition, { presets } from "react-text-transition";
export default function Topbar() {
  const TEXTS = ["React","React-native","node","express"];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    return (
      <div className="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              <h1>
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.wobbly}
                  style={
                    {
                      fontSize:'px'
                    }
                  }
                />
              </h1>
            </a>
            <div className="itemContainer">
              <PhoneIcon className="icon" />
              <a href={"tel:8885556918"} style={{ textDecoration: "none" }}>+91 8885556918</a>
            </div>
            <div className="itemContainer" onClick={()=>{

            }}>
              <EmailIcon className="icon" />
              <a href="mailto:dinuedm@gmail.com" style={{textDecoration:"none"}}>dinuedm@gmail.com</a>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => console.log("dinesh")}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    );
}
