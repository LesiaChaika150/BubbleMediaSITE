import './styles/main.scss';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

import { ApolloProvider } from '@apollo/client';
import client from './app/services/apollo'; // шлях до apollo.ts

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
