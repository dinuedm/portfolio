import './contact.scss'
import { Line } from "rc-progress";
 
export default function contact() {
    return (
      <div className="contact" id="contact">
        {/* <h2>MY SKILLS</h2>
        <h3></h3> */}
        <div className="left">
          <div className="bar">
            <h2>HTML</h2>
            <Line
              percent="65"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>JavaScript</h2>
            <Line
              percent="75"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>Typescript</h2>
            <Line
              percent="60"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>CSS</h2>
            <Line
              percent="50"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>REDUX</h2>
            <Line
              percent="80"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>NODE.JS</h2>
            <Line
              percent="70"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>JSON</h2>
            <Line
              percent="75"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
          <div className="bar">
            <h2>REACT HOOKS</h2>
            <Line
              percent="95"
              strokeWidth="2"
              strokeColor="#962222"
              trailWidth="2"
              trailColor="#d3d3d3"
            />
          </div>
        </div>
        <div className="rigth">
          <h1>EXPERIENCE</h1>
          <div className="expbar">
            <h4>DEC 2019 TO PRESENT</h4>
            <h2>ASSOCIATE SOFTWARE ENGINEER</h2>
            <h3>LEGATO HEALTH TECHNOLOGIES</h3>
          </div>
        </div>
      </div>
    );
}
