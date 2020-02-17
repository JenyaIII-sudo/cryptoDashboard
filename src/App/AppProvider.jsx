import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import cc from 'cryptocompare';

export const AppContext = createContext();

export const AppProvider = (props) => {
  const { children } = props;
  function savedSettings() {
    const localData = JSON.parse(localStorage.getItem('pages'));
    if (!localData) {
      return { page: 'settings', firstVisit: true };
    }
    return { page: 'dashboard', firstVisit: false };
  }
  const [page, setPage] = useState({ ...savedSettings() });
  const [coins, setCoins] = useState();

  useEffect(() => {
    const fetchCoins = async () => {
      const coinList = (await cc.coinList()).Data;
      setCoins([coinList]);
    };
    fetchCoins();
  }, []);

  const confirmFavorites = () => {
    setPage({ page: 'dashboard', firstVisit: false });
    localStorage.setItem(
      'pages',
      JSON.stringify({ page: 'settings', firstVisit: false }),
    );
  };

  console.log(coins);

  return (
    <AppContext.Provider value={{
      page, setPage, confirmFavorites, coins,
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
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};
