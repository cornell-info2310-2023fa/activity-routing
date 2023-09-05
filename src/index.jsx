import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import DateRefresh from './DateRefresh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title="Dynamic Website">
      <p>This is a <strong>client-side rendered</strong> website.</p>
    </Header>

    <DateRefresh color="deepskyblue" />
    <DateRefresh color="mediumorchid" actionText="Refresh Date"/>
    <DateRefresh color="lightsalmon" actionText="Change Date"/>
  </React.StrictMode>
);
