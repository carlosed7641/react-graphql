import ReactDOM from 'react-dom/client'
import App from './App.js'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css'

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
