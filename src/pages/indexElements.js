import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: #FFFFFF;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #00853E;
  }
`;

export const Image = styled.div`
  align-items: center;
  margin-left: 2.0rem;
`;