import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CoinHeaderGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
justify-self: center;
align-self: center;
`;

export default function CoinHeaderGrid({ name, symbol }) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderGridStyled>
  );
}

CoinHeaderGrid.defaultProps = {
  name: '',
  symbol: '',
};
CoinHeaderGrid.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string,
};
