import styled from "styled-components";
export const NavStyle = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  height: 70px;
  padding: 0 100px;
`;

export const UlStyle = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-self: end;
`;

export const AStyle = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
`;
