import styled from 'styled-components';

interface GameImageProps {
  src: string;
}

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

  @media (max-width: 768px) {
    height: 124px;

    & + li {
      margin-top: 18px;
    }
  }

  @media (max-width: 576px) {
    height: auto;
    padding: 12px;
    flex-direction: column;

    button {
      margin-top: 12px;
      width: 100%;
      padding: 8px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const GameImage = styled.div<GameImageProps>`
  width: 126px;
  height: 126px;
  border-radius: 50%;
  background: url(${props => props.src}) #C4C4C4 no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    width: 88px;
    height: 88px;
  }

  @media (max-width: 576px) {
    width: 64px;
    height: 64px;
  }
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

  @media (max-width: 768px) {
    margin-left: 36px;

    h2 {
      font-size: 20px;
    }

    p {
      margin-top: 8px;
      font-weight: bold;
      font-size: 20px;
    }
  }

  @media (max-width: 576px) {
    margin-left: 24px;

    h2 {
      font-size: 16px;
    }

    p {
      margin-top: 8px;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;