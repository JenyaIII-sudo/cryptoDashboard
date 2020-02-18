import React, { useContext } from 'react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';

const SearchGrid = styled.div`
display: grid;
grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
${backgroundColor2};
${fontSize2};
color: white;
border: 1px solid;
height: 25px;
place-self: center left;
`;

const Search = () => {
  const context = useContext(AppContext);
  const { coins, setFilteredCoins } = context;

  const handleFilter = debounce((inputValue, coin, filteredCoins) => {
    // Get all the coin symbols
    const coinSymbols = Object.keys(coin);
    // Get all the coin names, map symbol to name
    const coinNames = coinSymbols.map((sym) => coin[sym].CoinName);
    const allStringsToSearch = coinSymbols.concat(coinNames);
    console.log(allStringsToSearch);
  }, 500);

  const filterCoins = (e, filteredCoins, coin) => {
    const inputValue = e.target.value;
    handleFilter(inputValue, coin, filteredCoins);
  };

  return (
    <SearchGrid>
      <h2>Search all coins</h2>
      <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coins)} />
    </SearchGrid>
  );
};

export default Search;
