import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  padding: 20px 100px;
  background-color: #eba417;
  border: 0;
  border-radius: 100px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  transition: all .3s;

  &:hover {
    background-color: #d59412;
    color: #533907;
  }

  @media (max-width: 768px) {
    padding: 16px 56px;
    font-size: 18px;
  }

  @media (max-width: 576px) {
    padding: 12px 24px;
    font-size: 16px;
  }
`;