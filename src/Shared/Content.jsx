import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

export default function Content(props) {
  const context = useContext(AppContext);
  const { children } = props;
  const { coins, pricesState, page } = context;

  console.log(page.firstVisit);

  if (!coins) {
    return <div>Loading Coins... </div>;
  }
  if (!page.firstVisit && !pricesState) {
    return <div> Loading Prices </div>;
  }
  return <div>{children}</div>;
}
