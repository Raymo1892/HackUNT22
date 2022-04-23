import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: #FFFFFF;
  display: flex;
  text-decoration: none;
  alignSelf: center;
  margin: 2em;
  cursor: pointer;
  &.active {
    color: #00853E;
  }
`;

export const Image = styled.div`
  align-items: center;
  margin-left: 2.0rem;
  alignSelf: center;

`;

export const Button = styled.button`
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1.5em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 10px;
  display: block;
`;