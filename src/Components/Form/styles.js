import styled from "styled-components";

export const DivForm = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  align-items: flex-start;
  background-color: rgb(151,151,151, 0.4);
  border-radius: 0.5em;
  box-shadow: 3px 5px 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3em;
  padding: 3em;

    & label {
        margin: 0.2em;
    }

    & input{
        border-radius: 0.2em;
        border: 1px solid black;
        padding: 0.3em;
        width: 250px;
    }
`;


export const Error = styled.div`
    color: red;
`