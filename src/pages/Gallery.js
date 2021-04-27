import React, { Component, lazy, Suspense } from "react";
import Scroll from "./../components/scroll";

import RUBIKGUN from "./../images/rubiksgun.svg";
import RUBIK from "./../images/rubikskub.svg";
import SAMURAJ from "./../images/samuraj.svg";
import GUNFROG from "./../images/GUNFROG.svg";
import BLACKWHITE from "./../images/blacKnWhite.svg";
import DUDES from "./../images/dudes.svg";
import TWOD from "./../images/2d.svg";
import MUMIN from "./../images/mumin.svg";
import DRAGONFLY from "./../images/dragonfly.svg";
import GUZZ from "./../images/guzz.svg";
import FTP from "./../images/ftp.svg";
import TRIKK from "./../images/trikk.svg";
import GUNMAN from './../images/gunman.svg'
import BEACH from './../images/vivaBeach1.1.png'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="img-column">
        <Scroll showBelow={250} />

        <div className="img-card">
          <img loading="lazy" className="images" src={GUNMAN} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={SAMURAJ} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={RUBIKGUN} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={RUBIK} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={GUNFROG} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={MUMIN} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={BLACKWHITE} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={DUDES} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={FTP} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={DRAGONFLY} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={GUZZ} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={TWOD} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={BEACH} alt="img" />
        </div>
        <div className="img-card">
          <img loading="lazy" className="images" src={TRIKK} alt="img" />
        </div>
      </div>
    );
  }
}
