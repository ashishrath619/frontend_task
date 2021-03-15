import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__top">
        <div className="Footer__top1">
          <img src="footlogo.jpeg" alt="" className="Footer__top1Logo" />
          <p className="Footer__top1Option">TERMS OF SERVICES</p>
          <p className="Footer__top1Option">PRIVACY POLICY </p>
          <p className="Footer__top1Option">DEAL REGISTRATION</p>
        </div>
        <div className="Footer__top2">
          <p className="Footer__top2OptionTop">PRODUCT</p>
          <p className="Footer__top2Option">SAFE</p>
          <p className="Footer__top2Option">People</p>
          <p className="Footer__top2Option">Policy</p>
          <p className="Footer__top2Option">Technology</p>
          <p className="Footer__top2Option">CSP</p>
          <p className="Footer__top2Option">Third Party</p>
        </div>
        <div className="Footer__top3">
          <p className="Footer__top3OptionTop">COMPANY</p>
          <p className="Footer__top3Option">About Us</p>
          <p className="Footer__top3Option">Customers</p>
          <p className="Footer__top3Option">Career</p>
          <p className="Footer__top3Option">Channels</p>
          <p className="Footer__top3Option">Newsroom</p>
          <p className="Footer__top3Option">Press Release</p>
        </div>
        <div className="Footer__top4">
          <p className="Footer__top4OptionTop">RESOURCES</p>
          <p className="Footer__top4Option">Use Cases</p>
          <p className="Footer__top4Option">Whitepapers</p>
          <p className="Footer__top4Option">Videos</p>
          <p className="Footer__top4Option">Free Tools</p>
          <p className="Footer__top4Option">Posters</p>
          <p className="Footer__top4Option">Blog</p>
        </div>
        <div className="Footer__top5">
          <p className="Footer__top5OptionTop">CONTACT US</p>
        </div>
      </div>
      <p className="Footer__licence">Copyright © Abhedya 2021</p>
      <hr />
      <div className="footer_end"></div>
    </div>
  );
}

export default Footer;
