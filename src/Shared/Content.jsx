import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

export default function Content(props) {
  const context = useContext(AppContext);
  const { children } = props;
  const { coins } = context;
  if (!coins) {
    return <div>Loading Coins... </div>;
  }

  return <div>{children}</div>;
}
