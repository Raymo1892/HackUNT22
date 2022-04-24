import styled from "styled-components";

export const Image = styled.div`
  align-items: center;
  margin-left: 2.0rem;
  alignSelf: center;
  display: flex;
`;

export const Button = styled.button`
background-color: black;
color: white;
font-size: 24px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 5px;
cursor: pointer;
`;

export const Seats = styled.button`
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1em;
  margin: 1.2em;
  padding: 2em;
  border: 5px solid black;
  border-radius: 10px;
  display: block;
  flexDirection: row;
`;

export const Invisible = styled.button`
  background: ${props => props.primary ? "white" : "white"};
  color: ${props => props.primary ? "white" : "white"};

  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border: 0px solid black;
  border-radius: 10px;
  display: block;
  flexDirection: row;
`;

export const Dates = styled.button`
background-color: white;
color: black;
font-size: 24px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 5px;
cursor: pointer;
`;