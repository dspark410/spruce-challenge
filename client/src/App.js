import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

import Bookings from './pages/Bookings/Bookings'
import Navbar from './components/Navbar/Navbar'

const client = new ApolloClient({
  cache: new InMemoryCache({
    // return paginated bookings
    typePolicies: {
      Query: {
        fields: {
          getBookings: {
            keyArgs: false,
            merge(existing, incoming) {
              let bookings = []
              if (existing && existing.bookings) {
                bookings = bookings.concat(existing.bookings)
              }
              if (incoming && incoming.bookings) {
                bookings = bookings.concat(incoming.bookings)
              }
              return {
                ...incoming,
                bookings,
              }
            },
          },
        },
      },
    },
  }),
  link: new HttpLink({ uri: '/graphql' }),
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
