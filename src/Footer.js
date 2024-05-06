import React from "react";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>&copy; {currentYear} Gamelab Indonesia. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
