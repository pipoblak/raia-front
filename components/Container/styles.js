import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1200px;
  height 100%;
  background: ${(p) => p.theme.bg_primary};
`;

export default Container;
