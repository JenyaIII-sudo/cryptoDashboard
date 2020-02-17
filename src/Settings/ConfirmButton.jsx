import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

const ConfirmBurronStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
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
