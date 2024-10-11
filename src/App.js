import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';

const LazyAbout = React.lazy(() => import ('./components/About'));

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route
            path='about'
            element={ 
              <React.Suspense fallback='Loading....'> 
                <LazyAbout /> 
              </React.Suspense>
            } 
          />
          <Route path='/orderSummary' element={ <OrderSummary /> } />
          <Route path='/products' element={ <Products /> }>
            <Route index element={ <FeaturedProducts/> } />
            <Route path='featured' element={ <FeaturedProducts /> } />
            <Route path='new' element={ <NewProducts /> } />
          </Route>
          <Route path='/profile' element={<RequiredAuth> <Profile /> </RequiredAuth>} />
          <Route path='/login' element={ <Login /> } />
          <Route path='/users' element={ <Users /> } > 
            <Route path=':userId' element={ <UserDetails /> } />
            <Route path='admin' element={ <Admin /> } />
          </Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
