import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(217, 217, 217, 0.34);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 80%;
  background-color: #121414;
  overflow-y: auto;
  border-radius: 15px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }

  ::-webkit-scrollbar-thumb {
    background: #EBA417; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #be8310; 
  }
`;

export const Content = styled.div`
  width: 478px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #121414;
  padding: 48px 0;

  img {
    width: 100%;
  }

  h2 {
    font-size: 24px;
    margin-top: 56px;
  }

  p {
    font-weight: bold;
    text-align: left;
    margin-top: 10px;
  }

  button {
    margin-top: 24px;
  }
`;