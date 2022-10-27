import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { ProductsProvider } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

// must wrap App in BrowserRouter to use react-router-dom

root.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,
)
