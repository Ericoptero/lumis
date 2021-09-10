import styled from 'styled-components';

export const MainSection = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  margin-top: 60px;
  width: 100%;

  input {
    width: 100%;
    background: #121414;
    border: 0;
    border-bottom: 1px solid #FFFFFF;
    padding: 12px 8px;
    color: #FFFFFF;
    font-weight: bold;
  }
`;

export const GamesList = styled.ul`
  list-style: none;
  margin: 60px 0;
`;