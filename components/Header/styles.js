import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 95px;
  display: flex;
  border-bottom: solid 2px #e2e2e2;
`;

export const Logo = styled.img`
  margin: auto 0;
`;

export const Links = styled.div`
  margin: auto;
  margin-right: 0;
  margin-top: 26px;
`;

export const Link = styled.a`
  color: ${(p) => p.theme.primary};
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  margin: 0.5rem;
`;

export default Wrapper;
