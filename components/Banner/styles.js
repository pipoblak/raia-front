import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Open Sans, Helvetica, sans-serif, arial;
`;

export const Title = styled.h1`
  font-weight: 300;
  color: ${(p) => p.theme.primary};
  font-size: 48px;
  max-width: 1000px;
  margin: 42px auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 36px;
    margin: 32px auto;
  }
  @media (max-width: 510px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.h1`
  font-weight: 300;
  color: ${(p) => p.theme.secondary};
  font-size: 24px;
  margin: auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 510px) {
    font-size: 18px;
  }
`;

export const Colors = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ColorDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background: ${(p) => p.color};
`;

export const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
