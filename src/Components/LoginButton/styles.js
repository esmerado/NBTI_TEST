import styled from "styled-components";

export const LoginBtn = styled.button`
  border: none;
  border-radius: 6px;
  padding: 6px 8px;
  margin: 0px 0px 0px 10px;
  width: 140px;
  height: 40px;
  background-color: rgb(108, 99, 252);
  color: #fff;
  box-shadow: 2px 2px 5px rgb(108, 99, 252, 0.8);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 5px rgb(108, 99, 252, 0.8); 
  }
`;
