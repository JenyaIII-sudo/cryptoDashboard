import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
grid-gap: 15px;
margin-top: 40px;
`;

function getCoinToDisplay(coinList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
}

export default function CoinGrid({ topSection }) {
  const context = useContext(AppContext);
  const { coins, favorites } = context;

  return (
    <CoinGridStyled>
      {getCoinToDisplay(coins, topSection, favorites).map((coinKey) => (
        <CoinTile topSection={topSection} coinKey={coinKey} key={coinKey} />
      ))}
    </CoinGridStyled>
  );
}

CoinGrid.defaultProps = {
  topSection: false,
};
CoinGrid.propTypes = {
  topSection: PropTypes.bool,
};
