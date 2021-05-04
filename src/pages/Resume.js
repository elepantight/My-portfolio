import React, { useState } from "react";


import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    width: 200,
    height: 200,
    margin: 10,
    display: "inline-block",
    backgroundColor: "#243447",
    "&:hover, &.Mui-focusVisible": {
      transition: "1s",
      backgroundColor: "#f3f4f4",
      width: 500,
    },
    "@media (max-width: 444px)":{
    "&:hover, &.Mui-focusVisible": {
      width: 500,
      height: 200,
    },
  },
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    fontFamily: "Quicksand",
    color: "#c51f5d",
  },
  second: {
    fontSize: 18,
    fontFamily: "Quicksand",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: 15,
    color: "#11548f",
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
    fontFamily: "Raleway",
  },
}));

export default function SimpleCard() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);
  const [isShown9, setIsShown9] = useState(false);
  const [isShown10, setIsShown10] = useState(false);
  const [isShown11, setIsShown11] = useState(false);
  const [isShown12, setIsShown12] = useState(false);

  const classes = useStyles();

  /*  useEffect(() => {
     console.log(logoItem);
     TweenMax.to(
       logoItem,
       1,
       {
         opacity: 1,
         y: -50,
         ease: Elastic.easeInOut,
         stagger: 0.1,
       },
       "<0.5"
     );
   }, []); */

  return (
    <div className="resume-container">
      <div className="resume-cards">
        <Card onMouseEnter={() => setIsShown1(true)} className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NOROFF
            </Typography>
            <div onMouseLeave={() => setIsShown1(false)}>
              {isShown1 && (
                <p className="info-hover-text">
                  Design | HTML/CSS | CSS Frameworks | JavaScript | JavaScript
                  Frameworks
                </p>
              )}
            </div>
            <Typography className={classes.pos} color="textSecondary">
              2018-2020
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              FRONTEND DEVELOPER
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown2(true)}>
            <Typography className={classes.title} color="#197acf" gutterBottom>
              SUBWAY NORGE
            </Typography>
            <div onMouseLeave={() => setIsShown2(false)}>
              {isShown2 && (
                <p className="info-hover-text">
                  Basic Network and Internet Setup | Troubleshooting
                </p>
              )}
            </div>
            <Typography className={classes.pos} color="textSecondary">
              2019-Present
            </Typography>
            <Typography
              className={classes.second}
              variant="body2"
              component="p"
            >
              IT-TECHNICIAN
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown3(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              JENSENS BØFHUS
            </Typography>
            <div onMouseLeave={() => setIsShown3(false)}>
              {isShown3 && (
                <p className="info-hover-text">
                  Chief | Flippin Burgers and Steaks
                </p>
              )}

              <Typography className={classes.pos} color="textSecondary">
                2017-Present
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                KITCHEN EMPLOYEE
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown4(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              COCA COLA
            </Typography>
            <div onMouseLeave={() => setIsShown4(false)}>
              {isShown4 && (
                <p className="info-hover-text">
                  B1-B3 Forklifts | Inbound/Outbound | SAP
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2015-2016
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                WAREHOUSE EMPLOYEE
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="resume-cards">
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown5(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI{" "}
            </Typography>
            <div onMouseLeave={() => setIsShown5(false)}>
              {isShown5 && (
                <p className="info-hover-text">
                  Computer's Structure and Function | Communication Systems
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2014-2016
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                COMPUTER TECHNOLOGY
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown6(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI{" "}
            </Typography>
            <div onMouseLeave={() => setIsShown6(false)}>
              {isShown6 && (
                <p className="info-hover-text">
                  Installations/Maintenance of Hardware and Software
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2014-2016
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                COMPUTER COORDINATION AND SUPPORT
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown7(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI
            </Typography>
            <div onMouseLeave={() => setIsShown7(false)}>
              {isShown7 && (
                <p className="info-hover-text">
                  Troubleshooting Methodology | Evaluation of IT Products
                  Support Methods.
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2014-2016
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                ADMINISTRATION OF NETWORK AND SERVER EQUIPMENT
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown8(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI
            </Typography>
            <div onMouseLeave={() => setIsShown8(false)}>
              {isShown8 && (
                <p className="info-hover-text">
                  Installations/Maintenance of Hardware and Software
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2014-2016
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                NETWORK ADMINISTRATION
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="resume-cards">
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown9(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              NTI{" "}
            </Typography>
            <div onMouseLeave={() => setIsShown9(false)}>
              {isShown9 && (
                <p className="info-hover-text">
                  Network Equipment and IT System Solutions
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2014-2016
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                NETWORK TECHNOLOGY
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown10(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              COOP AS
            </Typography>
            <div onMouseLeave={() => setIsShown10(false)}>
              {isShown10 && (
                <p className="info-hover-text">
                  B1-B3 Forklifts | Picking Orders
                </p>
              )}

              <Typography className={classes.pos} color="textSecondary">
                2013-2014
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                WAREHOUSE EMPLOYEE
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown11(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              TINE AS
            </Typography>
            <div onMouseLeave={() => setIsShown11(false)}>
              {isShown11 && (
                <p className="info-hover-text">
                  B1-B3 Forklifts | Picking Orders
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2012-2012
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                WAREHOUSE EMPLOYEE
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent onMouseEnter={() => setIsShown12(true)}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              INFOKOMP{" "}
            </Typography>
            <div onMouseLeave={() => setIsShown12(false)}>
              {isShown12 && (
                <p className="info-hover-text">
                  Profitable Business | Combined With Sustainable Development
                </p>
              )}
              <Typography className={classes.pos} color="textSecondary">
                2008-2011
              </Typography>
              <Typography
                className={classes.second}
                variant="body2"
                component="p"
              >
                BUSINESS ADMINISTRATION & ECONOMICS
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
