import React from "react";
import { NavStyle, UlStyle, AStyle } from "./StyledHeader";
import ImgNav from "./img/logo.png";

const Header = () => {
  return (
    <NavStyle>
      <img src={ImgNav} style={{ height: "60px", width: "80px" }} />
      <UlStyle>
        <li>
          <AStyle>Home</AStyle>
        </li>
        <li>
          <AStyle>About</AStyle>
        </li>
        <li>
          <AStyle>Work</AStyle>
        </li>
        <li>
          <AStyle>Careers</AStyle>
        </li>
        <li>
          <AStyle>Contact Us</AStyle>
        </li>
      </UlStyle>
    </NavStyle>
  );
};

export default Header;
