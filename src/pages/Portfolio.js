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
      <div>
        <div className="container-card">
          {/* card 1 */}
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
                  Board Game created in JavaScript. Works for desktop and
                  tablets.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card-div">
            <div className="blog-card alt">
              <div className="meta">
                <img className="img-slide" src={METANOIA} />
                <ul className="details">
                  <li className="text">
                    <p className="number">3</p>
                    <a
                      href="https://github.com/elepantight/coming-soon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Github
                    </a>
                  </li>
                  <p className="number">4</p>
                  <a
                    href="https://metanoi4.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Live{" "}
                  </a>
                </ul>
              </div>
              <div className="description">
                <h1>Coming Soon page Metanoia</h1>
                <h2>React.js</h2>
                <p className="description-info">
                  Sign-up page for a clothing brand. Page not finished. looks
                  decent but buggy. Mobile is fucked up
                </p>
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
        </div>
      </div>

      <div className="container-mobile">
        <div className="card-mobile">
          <img className="img-card_mobile" src={GOT} alt="img" />
          <h2 className="mobile-text">Vanilla Javascript</h2>
          <p className="mobile-info">
          Board Game created in JavaScript. <br></br> Works for desktop and
                  tablets
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
            href="https://github.com/elepantight/GameOfThronesBoardGame"
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
      {/*
      <div className="container">
        {" "}
        <div className="row-card">
          {" "}
          <div className="card">
            <div className="content">
              <img className="card-img" src={METANOIA} alt="img" />
              <p>Coming Soon page Metanoia
                Sign-up page for a clothing brand. 
                Page not finished. looks decent but shit i
              </p>
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
              <img
                className="card-img"
                src={HOMEFAIR} // FIGURE OUT WHY src={require("./../images/homefair.jpg")} ISNT WORKING
                alt="img"
              />

              <p>Website HTML/CSS</p>

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
      */}
    </div>
  );
}

export default Portfolio;
