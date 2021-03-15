import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Test() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <h2>hello</h2>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        {" "}
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
      <h2>ashihs</h2>
      <div data-aos="fadeInUp">
        <h2>ashihs</h2>
      </div>
    </div>
  );
}
