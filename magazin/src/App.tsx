import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './auth/SignIn/components/SignIn';
import Cart from './Cart/components/Cart';
import HistoryOrders from './catalog/components/ HistoryOrders/HistoryOrders';
import NavBar from './catalog/components/NavBar/NavBar';
import PageCatalog from './catalog/components/PageCatalog/PageCatalog';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route component={PageCatalog} path="/" exact />
          <Route component={SignIn} path="/registration" />
          <Route component={Cart} path="/registration" />
          <Route component={HistoryOrders} path="/history" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;