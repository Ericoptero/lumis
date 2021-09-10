import styled, { css } from 'styled-components';

interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #fff;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 215px;
    height: 42px;
  }

  nav {
    display: flex;
    height: 100%;
    margin-left: 50px;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
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

  ${props => props.isActive && css`
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
  `}
`;