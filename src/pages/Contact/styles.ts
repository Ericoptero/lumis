import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex: 1;
  padding: 78px 0;

  h2 {
    text-align: center;
    font-size: 48px;
  }

  form {
    width: 520px;

    input {
      margin-top: 58px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  button {
    padding: 20px 75px;
  }

`;

export const Error = styled.div`
  width: 100%;
  background: #FFD8DB;
  border-radius: 5px;
  padding: 4px 8px;
  margin-top: 4px;
  color: #F23524;
`;