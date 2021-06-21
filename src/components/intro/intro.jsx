import './intro.scss'
import image from './1png.png';
import { init } from 'ityped'
import { useEffect ,useRef} from 'react';
export default function Intro() {
    const img=require('./1png.png');
    const myref= useRef();
    const hiremeref=useRef();
    useEffect(()=>{
       init(myref.current, {
         showCursor: false,
         typeSpeed: 100,
         backSpeed:60,
         backDelay:1500,
         strings: ["React-Native", "React", "Node", "Mongodb"],
       });
       init(hiremeref.current, {
         showCursor: false,
         typeSpeed: 1000,
         backSpeed: 60,
         backDelay: 1500,
         strings: ["Hire Me"],
       });
    },[]);
    return (
      <div className="intro" id="intro">
        <div className="left">
          <div className="imagecon">
            <img src={image} alt="dinesh" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Dinesh Elluru</h1>
            <h3>
              <span ref={myref}></span> Developer
            </h3>
            <button ref={hiremeref} onClick={()=>{
              console.log('Hire me clicked ')
            }}></button>
          </div>
        </div>
      </div>
    );
}
