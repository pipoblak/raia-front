import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  font-family: Open Sans, Helvetica, sans-serif, arial;
  justify-content: center;
  align-items: center;
`;

export const Brands = styled.div`
  margin: auto 32px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Brand = styled.img`
  margin: 0.3rem;
`;

export const Logo = styled.img`
  margin: auto;
  margin-right: 0;
  @media (max-width: 767px) {
    margin: auto;
  }
`;

export const Copyright = styled.span`
  margin: auto 0;
  margin-left: 0;
  color: ${(p) => p.theme.secondary};
  @media (max-width: 767px) {
    margin: 16pxauto;
  }
`;

export default Wrapper;
