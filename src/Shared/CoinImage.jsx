import React from 'react';
import PropTypes from 'prop-types';

export default function CoinImage({ coin, style }) {
  return (
    <img
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.CoinSymbol}
      style={style || { height: '50px' }}
    />
  );
}

CoinImage.defaultProps = {
  coin: {},
  style: '',
  ImageUrl: '',
  CoinSymbol: '',
};
CoinImage.propTypes = {
  coin: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
  ),
  style: PropTypes.string,
  ImageUrl: PropTypes.string,
  CoinSymbol: PropTypes.string,
};
