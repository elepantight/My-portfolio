import React, { useRef, useEffect } from "react";

import { TweenMax,Power3} from "gsap";

import INSTA from "./../images/instagram.svg";
import GIT from "./../images/github.svg";
function Header() {
  let logoItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    TweenMax.to(logoItem, 1, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
    <header id="no-copy">
      <div className="horizontal"></div>
      <div className="vertical"></div>
      <div className="container container_header">
        <div className="row_header">
          <div className="primary_title">
            <span className="block"></span>
            <h1 className="text_name">
              Arvid Hallberg
              <span
                ref={(el) => {
                  logoItem = el;
                }}
              ></span>
            </h1>
          </div>
          <div className="second_title">
            <div className="block"></div>
            <h4 className="text_info">
              &lt;FRONTEND=&#123;LIKES DESIGN&#125;/&gt;
            </h4>
          </div>
        </div>
      </div>

      {/*<div className="header_image">
     <img
                className="header-image"
                src={PLANET}
                alt="img"
              />
  </div> */}
    </header>
   
          <div className="container-icons">
          <div className="icon-row fade">
          <a
              href="https://www.instagram.com/vivasativamovement/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img className="icons" src={INSTA} alt="img" />
     
  
            </a>
          </div>
          <div className="icon-row fade">
          <a
              href="https://github.com/elepantight"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img className="icons" src={GIT} alt="img" />
  
  </a>
          </div>
        </div>
        </>
  );
}

export default Header;
