import React, { useContext } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v1';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

const PriceGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const PriceGrid = () => {
  const context = useContext(AppContext);
  const { pricesState } = context;
  const keyId = uuid();

  return (
    <PriceGridStyle>
      {pricesState.map((price, index) => <PriceTile index={index} price={price} />)}
    </PriceGridStyle>
  );
};

export default PriceGrid;
