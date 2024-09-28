import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './styles.css';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta', // Pokémon GraphQL API
  cache: new InMemoryCache(),
});
createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
