import styled from 'styled-components';

export const ContactItem = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactInfo = styled.span`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: #dbd5d5;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const ContactBtn = styled.button`
  font-size: 18px;
  margin-left: 15px;
  border: none;
  background-color: #e7c587;
  border-radius: 20px;
  height: 40px;
  width: 70px;
  cursor: pointer;
  :hover {
    background-color: #a06e49ba;
    color: #dbd5d5;
    transform: scale(1.2);
    transition: 500ms;
  }
`;
