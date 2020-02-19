import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings/index';
import Content from '../Shared/Content';
import Dashboard from '../Dashboard/Dashboard';

const App = () => (
  <AppLayout>
    <AppProvider>
      <AppBar />
      <Content>
        <Settings />
        <Dashboard />
      </Content>
    </AppProvider>
  </AppLayout>
);

export default App;
