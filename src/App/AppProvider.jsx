import React, { useState, createContext, useEffect } from 'react';
import getPull from 'lodash/pull';
import _ from 'lodash';
import PropTypes from 'prop-types';
import cc from 'cryptocompare';

export const AppContext = createContext();

const MAX_FAVORITES = 10;

export const AppProvider = (props) => {
  const { children } = props;
  function savedSettings() {
    const localData = JSON.parse(localStorage.getItem('coins'));
    if (!localData) {
      return { page: 'settings', firstVisit: true };
    }
    return 'KEK';
  }
  const [page, setPage] = useState({ ...savedSettings() });
  const [coins, setCoins] = useState();
  const [favorites, setFavorites] = useState(['BTC', 'ETH', 'XMR', 'DOGE']);
  const [filteredCoins, setFilteredCoins] = useState();

  const returnData = () => {
    const localData = JSON.parse(localStorage.getItem('coins'));
    if (localData) {
      setFavorites(localData);
    }
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const coinList = (await cc.coinList()).Data;
      setCoins(coinList);
    };
    fetchCoins();
    returnData();
  }, []);

  const confirmFavorites = () => {
    setPage({ page: 'dashboard', firstVisit: false });
    localStorage.setItem(
      'coins',
      JSON.stringify(favorites),
    );
  };

  const addCoin = (key) => {
    const favoritesCoin = [...favorites];
    if (favoritesCoin.length < MAX_FAVORITES && !_.includes(favorites, key)) {
      favoritesCoin.push(key);
      setFavorites(favoritesCoin);
    }
  };

  const removeCoin = (key) => {
    const favoritesCoin = [...favorites];
    setFavorites(getPull(favoritesCoin, key));
  };

  const isInFavorites = (key) => _.includes(favorites, key);

  return (
    <AppContext.Provider value={{
      page,
      setPage,
      confirmFavorites,
      coins,
      favorites,
      addCoin,
      removeCoin,
      isInFavorites,
      setFilteredCoins,
      filteredCoins,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.defaultProps = {
  children: [],
};
AppProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [
        PropTypes.object,
        PropTypes.string,
      ],
    ),
  ),
};
