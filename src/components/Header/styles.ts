import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  border-bottom: 1px solid #fff;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 215px;
    height: auto;
  }

  nav {
    display: flex;
    height: 100%;
    margin-left: 70px;
  }

  .active-link {
    color: #e1e1e6;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 10px 10px 0px 0px;
      background-color: #eba417;
      bottom: -1px;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }

    nav {
      margin-left: 40px;
    }
  }

  @media (max-width: 576px) {
    nav {
      margin-left: 25px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  padding: 0 8px;
  color: #a8a8b3;
  text-decoration: none;

  &:hover {
    color: #e1e1e6;
    font-weight: bold;  
  }
`;