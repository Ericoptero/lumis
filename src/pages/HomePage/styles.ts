import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSection = styled.main`
  display: flex;
  flex: 1;
  max-width: 1200px;
  width: 100%;
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
  overflow: auto;
`;