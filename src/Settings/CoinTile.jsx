import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DisabledTile, DeletableTile, SelectableTile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => {
    removeCoin(coinKey);
  } : () => {
    addCoin(coinKey);
  };
}

export default function CoinTile({ coinKey, topSection }) {
  const context = useContext(AppContext);

  const {
    coins, addCoin, removeCoin, isInFavorites,
  } = context;
  const coin = coins[coinKey];

  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileClass = DisabledTile;
  }

  return (
    <TileClass
      key={coin.Id}
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}

CoinTile.defaultProps = {
  coinKey: {},
  topSection: false,
};
CoinTile.propTypes = {
  coinKey: PropTypes.string,
  topSection: PropTypes.bool,
};
