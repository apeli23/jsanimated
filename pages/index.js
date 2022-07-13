import { useState, useRef } from "react";
import html2canvas from 'html2canvas';


export default function Home() {
  const [link, setLink] = useState('');
  const captionRef = useRef(undefined);

  const uploadHandler = () => {
    html2canvas(captionRef.current).then(canvas => {
      console.log(canvas.toDataURL());
      try {
        fetch('/api/upload', {
          method: 'POST',
          body: JSON.stringify({ data: canvas.toDataURL() }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then((response) => response.json())
          .then((data) => {
            setLink(data.data);
          });
      } catch (error) {
        console.error(error);
      }
    })
  }
  return (
    <>
    <nav>
    <h2>Animate a javascript object movement</h2>
    {link && <a href={link}>captioneLink</a>}
    <button onClick={uploadHandler}>Caption</button>
    </nav>
      <div className="country-wrap" ref={captionRef}>
        <div className="sun"></div>
        <div className="grass"></div>
        <div className="street">
          <div className="car">
            <div className="car-body">
              <div className="car-top-back">
                <div className="back-curve"></div>
              </div>
              <div className="car-gate"></div>
              <div className="car-top-front">
                <div className="wind-sheild"></div>
              </div>
              <div className="bonet-front"></div>
              <div className="stepney"></div>
            </div>
            <div className="boundary-tyre-cover">
              <div className="boundary-tyre-cover-back-bottom"></div>
              <div className="boundary-tyre-cover-inner"></div>
            </div>
            <div className="tyre-cover-front">
              <div className="boundary-tyre-cover-inner-front"></div>
            </div>
            <div className="base-axcel"></div>
            <div className="front-bumper"></div>
            <div className="tyre">
              <div className="gap"></div>
            </div>
            <div className="tyre front">
              <div className="gap"></div>
            </div>
            <div className="car-shadow"></div>
          </div>
        </div>
        <div className="street-stripe"></div>
        <div className="hill"></div>
      </div>
    </>
  )
}
