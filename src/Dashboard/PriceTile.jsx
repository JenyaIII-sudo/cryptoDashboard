import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';

const JustifyRight = styled.div`
  justify-self: right;
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: green;
  ${(props) => props.red && css`
    color: red;
  `}
`;

// eslint-disable-next-line prefer-template
const numberFormat = (number) => '$' + (number + '').slice(0, 7);


const PriceTileStyled = styled(SelectableTile)`
  ${(props) => props.compact && css` 
    ${fontSize3}
  `}
`;

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePct red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePct>
    </JustifyRight>
  );
}

function PriceTile({ sym, data }) {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <ChangePercent data={data} />
      </CoinHeaderGridStyled>
      <TickerPrice>
        {numberFormat(data.PRICE)}
      </TickerPrice>
    </PriceTileStyled>
  );
}

export default function PriceContent({ price, index }) {
  const sym = Object.keys(price)[0];
  const data = price[sym].USD;
  return (
    <PriceTile sym={sym} data={data} />
  );
}

PriceTile.defaultProps = {
  sym: '',
  data: {},
};
PriceContent.defaultProps = {
  price: {},
  index: 0,
};

PriceTile.propTypes = {
  sym: PropTypes.string,
  data: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.number,
        PropTypes.string,
      ],
    ),
  ),
};
PriceContent.propTypes = {
  price: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.string,
      ],
    ),
  ),
  index: PropTypes.number,
};
