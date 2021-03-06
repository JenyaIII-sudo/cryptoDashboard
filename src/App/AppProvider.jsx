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
  const [pricesState, setPricesState] = useState([]);
  // const [returnPricesData, setReturnPricesData] = useState([]);

  const returnLocalData = () => {
    const localData = JSON.parse(localStorage.getItem('coins'));
    if (localData) {
      setFavorites(localData);
    }
  };

  const fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    setCoins(coinList);
  };

  const pricesFunc = async () => {
    const returnData = [];
    for (let i = 0; i < favorites.length; i += 1) {
      try {
        // eslint-disable-next-line no-await-in-loop
        let priceData = await cc.priceFull(favorites[i], 'USD');
        returnData.push(priceData);
      } catch (e) {
        console.log('Fetch price error: ', e);
      }
    }
    return returnData;
  };

  const fetchPrices = async () => {
    // console.log('PRICE!!!!!!');
    // if (page.firstVisit) return;
    const prices = await pricesFunc();
    console.log('PRICE!!!!!!', prices);
    setPricesState(prices);
  };

  useEffect(() => {
    fetchCoins();
    fetchPrices();
    returnLocalData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmFavorites = async () => {
    setPage({ page: 'dashboard', firstVisit: false });
    fetchPrices();
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
    setPricesState(getPull(favoritesCoin, key));
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
      pricesState,
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
