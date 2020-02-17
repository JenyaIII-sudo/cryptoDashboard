import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfirmBurronStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1};
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    ${greenBoxShadow}
  }
`;
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  const context = useContext(AppContext);
  const { confirmFavorites } = context;
  return (
    <CenterDiv>
      <ConfirmBurronStyled onClick={confirmFavorites}>
        Confirm Favorites
      </ConfirmBurronStyled>
    </CenterDiv>
  );
}
