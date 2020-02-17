import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tile from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export default function CoinTile({ coinKey }) {
  const context = useContext(AppContext);
  const TileClass = Tile;
  const { coins } = context;
  const coin = coins[coinKey];

  return (
    <TileClass key={coin.Id}>
      <CoinHeaderGrid
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}

CoinTile.defaultProps = {
  coinKey: {},
};
CoinTile.propTypes = {
  coinKey: PropTypes.string,
};
