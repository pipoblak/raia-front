import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: url(${(p) => p.theme.bg_primary});
  background-repeat: repeat;
`;

export const Container = styled.div`
  width: 1200px;
  height 100%;

`;

export default Container;
