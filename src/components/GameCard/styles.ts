import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 176px;
  padding: 26px 20px;
  border: 1px solid #61DCFB;

  & + li {
    margin-top: 24px;
  }
`;

export const GameImage = styled.div`
  width: 126px;
  height: 126px;
  border-radius: 50%;
  background: url() #C4C4C4 center center;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 45px;

  h2 {
    font-size: 24px;
  }

  p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  width: 265px;
  height: 65px;
  background-color: #eba417;
  border: 0;
  border-radius: 100px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;