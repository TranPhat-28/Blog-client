import './App.css';
import Navigation from './views/navigation/Navigation';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}

export default App;
