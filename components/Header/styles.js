import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  min-height: 95px;
  max-height: 95px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: solid 2px #e2e2e2;
  font-family: Open Sans, Helvetica, sans-serif, arial;
  @media (max-width: 510px) {
    justify-content: center;
    max-height: 130px;
  }
`;

export const Logo = styled.img`
  margin: auto 0;
  @media (max-width: 767px) {
    max-width: 120px;
  }
  @media (max-width: 510px) {
    margin: auto;
  }
  @media (max-width: 380px) {
    max-width: 90px;
  }
`;

export const Links = styled.div`
  margin: auto;
  margin-right: 0;
  margin-top: 26px;
  @media (max-width: 767px) {
    margin-top: 32px;
  }
  @media (max-width: 510px) {
    margin: auto;
  }
`;

export const Link = styled.a`
  color: ${(p) => p.theme.primary};
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  margin: 0.5rem;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (max-width: 380px) {
    font-size: 13px;
  }
`;

export default Wrapper;
