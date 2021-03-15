import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Grid from "@material-ui/core/Grid";
import "./Styleproject.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Slder_Container">
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div>
            <strong className="ourproject">
              <div data-aos="zoom-in">
                Our <br /> Projects.
              </div>
            </strong>
          </div>
        </Grid>
        <Grid item xs={12} className="slider_media">
          <Grid item xs={12} sm={11}>
            <div
              style={{
                // width: "90%",
                display: true,
                // alignContent: "center",
                // justifyContent: "center",
                // paddingLeft: "50px",
                // marginLeft: "20px",
                backgroundColor: "#1c2135",
              }}
            >
              <Slider
                {...settings}
                style={{ marginLeft: "0rem", paddingLeft: "0rem" }}
                className="sliderimage"
              >
                <div>
                  <img
                    src="https://us.123rf.com/450wm/nicoelnino/nicoelnino1710/nicoelnino171000012/88776113-business-process-management-and-automation-concept-with-icons-of-hiring-workflow-document-validation.jpg?ver=6"
                    width="300"
                  />{" "}
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqkFAIgVNo6sxZdnsqKFKD4uk2nnkoDXvPg&usqp=CAU"
                    width="300"
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalAScZ6hz25jgxFwl7pJ617jWWfNcY011qg&usqp=CAU"
                    width="270"
                    heigth="150"
                  />{" "}
                </div>
                <div>
                  <img
                    src="                https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgSMY0gWSFtQaVsW6E8A3AKAwrnbqB3Lptw&usqp=CAU
                    "
                    width="325"
                  />
                </div>
                <div>
                  <img
                    src="https://us.123rf.com/450wm/nicoelnino/nicoelnino1710/nicoelnino171000012/88776113-business-process-management-and-automation-concept-with-icons-of-hiring-workflow-document-validation.jpg?ver=6"
                    width="300"
                  />{" "}
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalAScZ6hz25jgxFwl7pJ617jWWfNcY011qg&usqp=CAU"
                    width="270"
                    heigth="150"
                  />{" "}
                </div>
              </Slider>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* <Particles
        height="50vh"
        //   width="100vw"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 200,
              },
            },
          },
        }}
        style={{ backgroundColor: "#535c68" }}
      /> */}
    </div>
  );
}
