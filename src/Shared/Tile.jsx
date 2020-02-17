import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from './Styles';

const Tile = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    transition: 0.1s;
    ${greenBoxShadow};
  }
`;
export default Tile;
