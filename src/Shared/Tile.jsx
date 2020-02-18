import styled from 'styled-components';
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow,
} from './Styles';

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

export const DeletableTile = styled(Tile)`
&:hover {
  cursor: pointer;
  ${redBoxShadow}
}
`;

export const DisabledTile = styled(Tile)`
pointer-events: none;
opacity: 0.4
`;

export default Tile;
