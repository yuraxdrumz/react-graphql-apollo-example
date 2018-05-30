import React from 'react';
import { render } from 'react-dom';
import { HttpLink } from 'apollo-boost';
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { Client } from 'subscriptions-transport-ws';
import { ApolloLink, concat, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws'

import App from './App'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });


const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      Authorization: localStorage.getItem('token') || null,
    }
  });
  return forward(operation);
})

const hasSubscriptionOperation = ({ query: { definitions } }) =>
  definitions.some(
    ({ kind, operation }) =>
      kind === 'OperationDefinition' && operation === 'subscription',
  )

const link = ApolloLink.split(
  hasSubscriptionOperation,
  new WebSocketLink({
    uri:
      'ws://localhost:4000/subscriptions',
    options: { reconnect: true },
  }),
  httpLink
)

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache()
})


// const httpLink = createHttpLink({
//     uri: 'http://localhost:4000/graphql'
// })

// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('token');
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         Authorization: token ? `Bearer ${token}` : "",
//       }
//     }
//   });
// // Pass your GraphQL endpoint to uri
// const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });

const ApolloApp = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </BrowserRouter>
);

render(React.createElement(ApolloApp), document.querySelector('.main'));
