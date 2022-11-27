import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const FormLabel = styled.label`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: #dbd5d5;
`;

export const FormBtn = styled.button`
  font-size: 18px;
  margin-right: auto;
  margin-left: auto;
  border: none;
  background-color: #e7c587;
  border-radius: 5px;
  height: 40px;
  width: 140px;
  cursor: pointer;
  :hover {
    background-color: #a06e49ba;
    color: #dbd5d5;
    transform: scale(1.2);
    transition: 500ms;
  }
`;
