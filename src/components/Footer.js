import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/arabeeeels?igsh=MWcxcWxnaG55aDJ1eQ==">
            <InstagramIcon />
          </a>
          <a href="aramorg28@gmail.com">
          <EmailIcon/>
          </a>
        <a href="https://www.facebook.com/arabella.morgado.3?mibextid=ZbWKwL">
            <FacebookIcon />
          </a>
      </div>
      <p> &copy; 2024</p>
    </div>
  );
}

export default Footer;
