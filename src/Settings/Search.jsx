import React, { useContext } from 'react';
import debounce from 'lodash/debounce';
import pickBy from 'lodash/pickBy';
import includes from 'lodash/includes';
import fuzzy from 'fuzzy';
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

  const handleFilter = debounce((inputValue, coin, setFilterCoins) => {
    // Get all the coin symbols
    const coinSymbols = Object.keys(coin);
    // Get all the coin names, map symbol to name
    const coinNames = coinSymbols.map((sym) => coin[sym].CoinName);
    const allStringsToSearch = coinSymbols.concat(coinNames);
    const fuzzyResults = fuzzy.filter(inputValue, allStringsToSearch, {})
      .map((result) => result.string);
    const filteredCoins = pickBy(coin, (result, symKey) => {
      const coinName = result.CoinName;
      return (includes(fuzzyResults, symKey)) || includes(fuzzyResults, coinName);
    });
    setFilterCoins(filteredCoins);
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
