import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tile, { DisabledTile, DeletableTile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function CoinTile({ coinKey, topSection }) {
  const context = useContext(AppContext);
  let TileClass = Tile;
  if (topSection) {
    TileClass = DeletableTile;
  }
  const { coins } = context;
  const coin = coins[coinKey];

  return (
    <TileClass key={coin.Id}>
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
