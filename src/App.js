import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BookHotScreen from './components/bookHotScreen/BookHotScreen';
import Content from './components/content/Content';
import Footer from './components/content/footer/Footer';
import DevelopScreen from './components/developScreen/DevelopScreen';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Payment from './components/payment/Payment';
import ProductCategory from './components/productCategory/ProductCategory';
import ProductScreen from './components/productScreen/ProductScreen';
import Register from './components/register/Register';
import SearchProduct from './components/searchProduct/SearchProduct';
import Success from './components/success/Success';
import { StoreProvider } from './store';
import Store from './store/Store';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
          <div className="App .modal-fullscreen">
            <Header />
            <Routes>
              <Route exact path='/' element={<Content />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Store />} />
              <Route path='/payment' element={<Payment />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/search/:keyword" element={<SearchProduct />} />
              <Route path="/category/:slug" element={<ProductCategory />} />
              <Route path='/success' element={<Success />} />
              <Route path='/booksHot' element={<BookHotScreen />} />
              <Route path='/maintenance' element={<DevelopScreen />} />
            </Routes> 
            <Footer /> 
          </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;