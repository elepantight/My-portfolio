import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";


import ARROW from './../images/arrow-up.png';

const useStyles = makeStyles((theme) => ({
    toTop: {
        width: 30,
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        color: '#C3CDD7',
        right: '2%',
        cursor: 'pointer',
    }
}))

const Scroll = (showBelow) => {

    const classes = useStyles();
    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };

    useEffect(() => {
        if(showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })


    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    return (
        <div className="backToTop">
                      <img
            src={ARROW}
            alt="img"
            onClick={handleClick} className={classes.toTop}
          />

</div>
    );
};

export default Scroll;
