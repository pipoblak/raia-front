import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AdditionalInfoPopup = styled.p`
  font-size: 16px;
`;

export const AdditionalInfoScrollDown = styled.div`
  padding: 32px;
  color: ${(p) => p.theme.secondary};
`;

export default Wrapper;
