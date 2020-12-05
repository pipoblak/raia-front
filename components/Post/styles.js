import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 1rem;
  font-family: Open Sans, Helvetica, sans-serif, arial;
  min-width: 300px;
  max-width: 350px;
`;

export const ImageBackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 225px;
  background: ${(p) => p.bgColor};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 80%;
`;

export const Title = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 300;
  margin: 1rem;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 510px) {
    font-size: 18px;
  }
`;

export const InfoContent = styled.div`
  height: 120px;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  color: ${(p) => p.theme.secondary};
  font-size: 16px;
  font-weight: 300;
  margin: 8px;
`;

export const Button = styled.button`
  background: ${(p) => p.bgColor};
  color: white;
  font-size: 18px;
  font-weight: 300;
  border: none;
  margin: auto;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export default Wrapper;
