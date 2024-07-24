import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GlobalStyles } from './styles/globalStyles';

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Budget from './components/Budget/Budget';
import Expenses from './components/Expenses/Expenses';
import Income from './components/Income/Income';
import Financial from './components/Financial/Financial';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Layout/Header';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/budget" component={Budget} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/income" component={Income} />
          <Route path="/financial" component={Financial} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
