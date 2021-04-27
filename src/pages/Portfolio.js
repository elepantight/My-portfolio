import React, { useRef, useEffect } from "react";
import Scroll from "./../components/scroll";

import { TweenMax, Power1, Power2, Power3, Bounce, Elastic } from "gsap";

import GOT from "./../images/GOT-start.jpg";
import HOMEFAIR from "./../images/homefair.jpg";
import BESSEGGEN from "./../images/beseggen.jpg";
import SPORTIF from "./../images/sportif.jpg";
import RICKMORTY from "./../images/rick.jpg";
import GAME from "./../images/game.jpg";
import COOLBEANS from "./../images/cool.jpg";
import SPORTIF2 from "./../images/sportif2.jpg";
import BESSEGGEN2 from "./../images/bestype.jpg";
import PORTFOLIO from "./../images/portfolio.jpg";
import BERGENLODGE from "./../images/bergenlodge.jpg";
import TRA from "./../images/Tra.PNG";
import VIVA from "./../images/viva.jpg";
import METANOIA from "./../images/metanoia.PNG";

function Portfolio() {
  /*  let logoItem = useRef(null);

useEffect(() => {
  console.log(logoItem);
  TweenMax.from(
    logoItem,
    1,
    {
      opacity:1,
      x: -1000,
      y: 0,
    }
  )
  TweenMax.to(
    logoItem,
    1,
    {
      opacity:1,
      x: 0,
      y: 0,
      ease: Power1.easeIn
    /* ref={el => {logoItem = el}} 
    }
  )
}, []) */

  return (
    /* should change row with container and css */
    <div className="header-box">
      <Scroll showBelow={250} />
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Recent</span>
            <span>Projects &amp;</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>Prototypes</div>
        </div>
      </div>
      <div className="row-card">
        {" "}
        {/* container */}
        <div className="container">
          {" "}
          {/*row */}
          <div className="card">
            <div className="content">
              <img className="card-img" src={METANOIA} alt="img" />
              <p>Coming Soon page Metanoia</p>
              <a
                href="https://github.com/elepantight/coming-soon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
              <a
                href="https://metanoi4.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                live
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={GOT} alt="img" />
              <p>Game Of Thrones JavaScript BoardGame</p>
              <a
                href="https://github.com/elepantight/GameOfThronesBoardGame"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
              <a
                href="https://gameofthronesboardgame.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                live
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img
                className="card-img"
                src={HOMEFAIR} // FIGURE OUT WHY src={require("./../images/homefair.jpg")} ISNT WORKING
                alt="img"
              />

              <p>Responsive Website HTML/CSS</p>

              <a
                href="https://github.com/elepantight/homefair"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
              <a
                href="https://homefair.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                live
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={BESSEGGEN} alt="img" />
              <p>Responsive Website HTML/CSS</p>

              <a
                href="https://github.com/elepantight/Besseggen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
              <a
                href="https://besseggen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                live
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={SPORTIF} alt="img" />
              <p>Website HTML/CSS</p>

              <a
                href="https://github.com/elepantight/Sportif"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={RICKMORTY} alt="img" />
              <p>React API fetching Rick And Morty</p>

              <a
                href="https://github.com/elepantight/rickmorty"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={GAME} alt="img" />
              <p>React API fetching Game App</p>

              <a
                href="https://github.com/elepantight/game-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-1"
              >
                Github
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={COOLBEANS} alt="img" />
              <p>Prototype for a cold-brew company.</p>
              <a
                href="https://xd.adobe.com/view/43024c38-6a75-4a4e-6937-ce95fba0cf0d-3533/?fullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={SPORTIF2} alt="img" />
              <p>Prototype for Sportif Unlimited</p>

              <a
                href="https://xd.adobe.com/view/bbfae16d-d6cb-4f7c-6f20-4760f2325f30-cdcb/?fullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={BESSEGGEN2} alt="img" />
              <p>Prototype for Besseggen Arkitekter</p>
              <a
                href="https://xd.adobe.com/view/b151078a-3966-4df6-6644-02f7a6c773a2-c760/?fullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={VIVA} alt="img" />
              <p>Prototype for Viva Sativa Movement</p>
              <a
                href="https://xd.adobe.com/view/43024c38-6a75-4a4e-6937-ce95fba0cf0d-3533/grid"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={PORTFOLIO} alt="img" />
              <p>Prototype for my portfolio</p>
              <a
                href="https://xd.adobe.com/view/43024c38-6a75-4a4e-6937-ce95fba0cf0d-3533/grid"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={BERGENLODGE} alt="img" />
              <p>Prototype for hotel agency</p>
              <a
                href="https://xd.adobe.com/view/11fefd2c-93fb-4d0b-5647-53de37d6d793-67cf/screen/1b2680fa-b9ed-41c5-ac4e-617db9e2815e?fullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img className="card-img" src={TRA} alt="img" />
              <p>Prototype for Trä&Miljö</p>
              <a
                href="https://xd.adobe.com/view/0fcc3074-a784-4df4-6c3e-f200f80db5f1-79fd/?fullscreen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-2"
              >
                Desktop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
