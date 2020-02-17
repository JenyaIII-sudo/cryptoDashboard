import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

export default function WelcomeMessage() {
  const context = useContext(AppContext);
  const { page } = context;
  return (
    <div>
      {page.firstVisit
        ? 'Welcome to CryptoDash, please select your favorite coins to begin'
        : null}
    </div>
  );
}
