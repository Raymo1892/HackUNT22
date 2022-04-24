import styled from "styled-components";

export const Image = styled.div`
  align-items: center;
  margin-left: 2.0rem;
  alignSelf: center;
  display: flex;
`;

export const Button = styled.button`
  background: ${props => props.primary ? "black" : "white"};
  color: ${props => props.primary ? "white" : "black"};

  font-size: 1.6em;
  margin: 1em;
  padding: 2em;
  border: 5px solid black;
  border-radius: 10px;
  display: block;
  flexDirection: row;
`;