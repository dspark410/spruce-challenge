import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

import Bookings from './components/Bookings/Bookings'
import Navbar from './components/Navbar/Navbar'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:5000/graphql' }),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Bookings />
    </ApolloProvider>
  )
}

export default App
