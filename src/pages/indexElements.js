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

  font-size: 1.4em;
  margin: 1em;
  padding: 3em;
  border: 2px solid black;
  border-radius: 10px;
  display: block;
  flexDirection: row;
`;