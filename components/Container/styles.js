import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(${(p) => p.theme.bg_primary});
  background-repeat: repeat;
  flex: 1;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height 100%;
  @media(max-width: 1200px) {
    padding: 0 16px;
  }
`;

export default Container;
