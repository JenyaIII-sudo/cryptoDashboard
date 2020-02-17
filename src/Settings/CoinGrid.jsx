import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const CoinGridStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`;

export default function CoinGrid() {
  const context = useContext(AppContext);
  const { coins } = context;
  console.log(coins);

  return (
    <CoinGridStyled>
      {Object.keys(coins[0]).map((coinKey) => (
        <div key={coinKey}>{coinKey}</div>
      ))}
    </CoinGridStyled>
  );
}
