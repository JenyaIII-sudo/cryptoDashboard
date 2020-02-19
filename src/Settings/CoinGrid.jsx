import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
grid-gap: 15px;
margin-top: 40px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
  return (filteredCoins && Object.keys(filteredCoins))
  || Object.keys(coinList).slice(0, 100);
}

function getCoinToDisplay(coinList, topSection, favorites, filterCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}

export default function CoinGrid({ topSection }) {
  const context = useContext(AppContext);
  const { coins, favorites, filteredCoins } = context;

  return (
    <CoinGridStyled>
      {getCoinToDisplay(coins, topSection, favorites, filteredCoins).map((coinKey) => (
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
