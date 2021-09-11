import styled from 'styled-components';

export const MainSection = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  padding: 60px 20px;

  @media (max-width: 768px) {
    min-height: calc(100vh - 60px);
    padding: 40px 12px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  width: 100%;
`;

export const GamesList = styled.ul`
  list-style: none;
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 60px 0;
  
  p {
    width: 430px;
    text-align: center;
    font-weight: bold;
    font-size: 36px;

    span {
      display: block;
      color: #61DCFB;
    }
  }

  @media (max-width: 576px) {
    p {
      width: 300px;
      font-size: 24px;
    }
  }
`;