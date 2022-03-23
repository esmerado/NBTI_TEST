import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 3em;
`;
export const Input = styled.input`
  outline: none;
  padding: 3px 5px;
  width: 200px;
  height: 30px;
`;
export const Button = styled.button`
  background-color: ${(props) => props.bg};
  border: none;
  padding: 6px 8px;
  margin: 0px 0px 0px 10px;
  width: 140px;
  height: 40px;
  color: ${(props) => props.color};
  box-shadow: 3px 5px 0px rgb(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 4px 6px 1px rgb(0, 0, 0, 0.8);
  }
`;

export const TodoTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ListDiv = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  flex-direction: column;
  background-color: #D4CFCF;
  box-shadow: 3px 5px 10px rgb(0,0,0,0.6);
  border-radius: 0.4em;
`;

export const Ul = styled.ul`
  list-style: none;
  padding-bottom:  1em;
  & li {
    padding: 0.2em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin-bottom: 4em;
`;
