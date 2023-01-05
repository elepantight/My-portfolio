import React from "react";
import Scroll from "./../components/scroll";

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
import DARK from './../images/darmode.PNG';
import DARK2 from './../images/darkmode.PNG'

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
    <div className="header-box">
      <Scroll showBelow={250} />
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>Recent</span>
            <span>Projects</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>Prototypes</div>
        </div>
      </div>
      <div className="vertical-block_1"></div>
      <div className="vertical-block_2"></div>
      {/*  //////////////////  */}
        <div className="container-card">
         
          {/* Card 1 */}
          <div className="card-div">
            <div className="blog-card alt">
              <div className="meta">
                <img className="img-slide" src={DARK} />
                <ul className="details">
                  <li className="text">
                    <p className="number">3</p>
                    <a
                      href="https://github.com/elepantight/login-light-dark-theme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Github
                    </a>
                  </li>
                  <p className="number">4</p>
                  <a
                    href="https://d4rkl1ght.netlify.app//"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Live{" "}
                  </a>
                </ul>
              </div>
              <div className="description">
                <h1>Log in</h1>
                <h2>React.js</h2>
                <p className="description-info">
                  Log in page with dark mode function. 
                </p>
              </div>
            </div>
          </div>
           {/* card 2 */}
           <div className="card-div">
            <div className="blog-card">
              <div className="meta">
                <img className="img-slide" src={GOT} alt="img" />
                <ul className="details">
                  <li className="text">
                    <p className="number">1</p>
                    <a
                      href="https://github.com/elepantight/GameOfThronesBoardGame"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Github
                    </a>
                  </li>
                  <p className="number">2</p>
                  <a
                    href="https://gameofthronesboardgame.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Live
                  </a>
                </ul>
              </div>
              <div className="description">
                <h1>Game Of Thrones Board Game</h1>
                <h2>Vanilla Javascript</h2>
                <p className="description-info">
                  {" "}
                  Board Game created with JavaScript. Works for desktop and
                  tablets.
                </p>
              </div>
            </div>
          </div>
          <div className="card-div">
            <div className="blog-card alt">
              <div className="meta">
                <img className="img-slide" src={TRA} alt="alt" />
                <ul className="details">
                  <li className="text">
                    <p className="number">7</p>
                    <a
                      href="https://xd.adobe.com/view/0fcc3074-a784-4df4-6c3e-f200f80db5f1-79fd/?fullscreen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      ADOBE XD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="description">
                <h1>Prototype Trä & Miljö</h1>
                <h2>Adobe Xd</h2>
                <p className="description-info">Prototype</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card-div">
            <div className="blog-card">
              <div className="meta">
                <img className="img-slide" src={BESSEGGEN} alt="img" />
                <ul className="details">
                  <li className="text">
                    <p className="number">5</p>
                    <a
                      href="https://github.com/elepantight/Besseggen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Github
                    </a>
                  </li>
                  <li className="text">
                    <p className="number">6</p>
                    <a
                      href="https://besseggen.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Live
                    </a>
                  </li>
                </ul>
              </div>
              <div className="description">
                <h1>Besseggen Arkitekter</h1>
                <h2>HTML / CSS</h2>
                <p className="description-info">
                  {" "}
                  Bootstraped website for an architect company.
                </p>
              </div>
            </div>
          </div>
          {/* Card 4 */}

        </div>

      {/* MOBILE */}

      <div className="border-mobile">
      <div className="container-mobile">
          <div className="card-mobile">
            <img className="img-card_mobile" src={DARK2} alt="img" />
            <h2 className="mobile-text">React.js</h2>
            <p className="mobile-info">
              Simple login swich between dark and light mode
            </p>
            <ul className="mobile-list">
              <li className="mobile-links">
                <a
                  href="https://github.com/elepantight/login-light-dark-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                >
                  Github
                </a>
              </li>
              <li className="mobile-links">
                <a
                  href="https://d4rkl1ght.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                >
                  Live
                </a>
              </li>
            </ul>
          </div>
          </div>
        <div className="container-mobile">
          <div className="card-mobile">
            <img className="img-card_mobile" src={GOT} alt="img" />
            <h2 className="mobile-text">Vanilla Javascript</h2>
            <p className="mobile-info">
              Board Game created with JavaScript. <br></br> Works for desktop
              and tablets
            </p>
            <ul className="mobile-list">
              <li className="mobile-links">
                <a
                  href="https://github.com/elepantight/GameOfThronesBoardGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                >
                  Github
                </a>
              </li>
              <li className="mobile-links">
                <a
                  href="https://gameofthronesboardgame.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                >
                  Live
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-mobile">
          <div className="card-mobile">
            <img className="img-card_mobile" src={METANOIA} alt="img" />
            <h2 className="mobile-text">React.js</h2>
            <p className="mobile-info">
            Sign-up page for a clothing brand. <br></br>Page not finished. looks
                  decent but buggy.<br></br>Mobile is fucked up
            </p>
            <ul className="mobile-list">
              <li className="mobile-links">
              <a
                      href="https://github.com/elepantight/coming-soon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Github
                    </a>
                  </li>
                  <li className="mobile-links">
                  <a
                    href="https://metanoi4.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Live{" "}
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-mobile">
          <div className="card-mobile">
            <img className="img-card_mobile" src={BESSEGGEN} alt="img" />
            <h2 className="mobile-text">HTML / CSS</h2>
            <p className="mobile-info">
            Bootstraped website for an architect company.
            </p>
            <ul className="mobile-list">
              <li className="mobile-links">
                <a
                  href="https://github.com/elepantight/Besseggen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                >
                  Github
                </a>
              </li>
              <li className="mobile-links">
                <a
                  href="https://besseggen.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link"
                >
                  Live
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>




      {/* OLD PROJECTS  */}



      <div className="old-project-container">


        <div className="old-project-title">
            <a
              href="https://xd.adobe.com/view/32e488c4-5a4b-4ab6-a2ac-95335bb47227-67b7/?fullscreen/"
              target="_blank"
              rel="noopener noreferrer"
              className="old-project-links"
            >
              Host IT
            </a>

            <a
              href="https://homefair.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="old-project-links"
            >
              Homefair
            </a>
            <a
              href="https://xd.adobe.com/view/19dd4519-a494-4d90-a004-9f67c3d37e02-4c8e/?fullscreen&hints=off"
              target="_blank"
              rel="noopener noreferrer"
              className="old-project-links"
            >
              Login App
            </a>
            <a
              href="https://xd.adobe.com/view/32e488c4-5a4b-4ab6-a2ac-95335bb47227-67b7/?fullscreen/"
              target="_blank"
              rel="noopener noreferrer"
              className="old-project-links"
            >
              Sportif Unlimited
            </a>

         
        </div>
      </div>
     
    </div>
  );
}

export default Portfolio;
