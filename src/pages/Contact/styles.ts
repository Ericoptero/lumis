import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  padding: 78px 0;

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
    padding: 32px 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex: 1;

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

  @media (max-width: 768px) {
    h2 {
      font-size: 36px;
    }

    input {
      margin-top: 36px;
    }
  }

  @media (max-width: 576px) {
    form {
      width: 100%;
    }

    input {
      margin-top: 24px;
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

  @media (max-width: 768px) {
    margin-top: 40px;

    button {
      padding: 15px 55px;
      font-size: 20px;
    }
  }

  @media (max-width: 576px) {
    button {
      padding: 10px 40px;
      font-size: 16px;
    }
  }
`;

export const Error = styled.div`
  width: 100%;
  background: #FFD8DB;
  border-radius: 5px;
  padding: 4px 8px;
  margin-top: 4px;
  color: #F23524;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;