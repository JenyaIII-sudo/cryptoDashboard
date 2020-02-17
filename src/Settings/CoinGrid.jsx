import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 15px;
margin-top: 40px;
`;

export default function CoinGrid() {
  const context = useContext(AppContext);
  const { coins } = context;
  console.log(coins);

  function getCoinToDisplay(coinList) {
    return Object.keys(coinList).slice(0, 100);
  }

  return (
    <CoinGridStyled>
      {getCoinToDisplay(coins).map((coinKey) => (
        <CoinTile coinKey={coinKey} key={coinKey} />
      ))}
    </CoinGridStyled>
  );
}
