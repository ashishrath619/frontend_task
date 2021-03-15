import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";
import Footer from "./Footer";
import Msg from "./Msg";
import Slider from "./Slider";
import Flowchart from "./Flowchart";
import Appbar from "./Navbar";
import "./Styleproject.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#232839",
  },
  h2: {
    backgroundColor: "#dff9fb",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div style={{ overflow: "hidden" }}>
      <Appbar />
      <div className={classes.root}>
        <Paper className={classes.paper} square>
          <Grid container>
            <Grid item xs={12}>
              <Particles
                height="50vh"
                style={{ backgroundColor: "#0e102c" }}
                //   width="100vw"
                params={{
                  particles: {
                    number: {
                      value: 40,
                    },
                    size: {
                      value: 7,
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse",
                      },
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                    },
                  },
                }}
                // style={{ backgroundColor: "#0e102c" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}

              <div className="container_graphics">
                <h1 className="graphics_design_heading">
                  Graphic <br /> Designing.
                </h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ color: "#dff9fb" }}>
              <div className="container_graphicstext">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </p>

                <p className="howdoeswe">
                  View Our Work
                  <br />
                  <u>View How Does We Work</u>
                </p>
              </div>
              {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
            </Grid>
          </Grid>
        </Paper>
        <Flowchart />
        <Slider />
        <Particles
          height="20%"
          //   width="100vw"
          className="particlescss"
          // style={{ backgroundColor: "#0e102c" }}
          //   width="100vw"
          params={{
            particles: {
              number: {
                value: 40,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
            },
          }}
        />
        <Msg />
        <Footer />
      </div>
    </div>
  );
}
