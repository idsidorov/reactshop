import React from 'react';
import NavBar from './catalog/components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
          <Navbar />
          <div className="container">
             <Switch>
                 <Route component={PageTodoList} path="/todo" />
                 <Route component={PageAboutUs}  path="/about" />
                 <Route component={PageSignIn}  path="/signIn" />
                 <Route component={PageSignUp}  path="/signUp" />
             </Switch>
          </div>
      </BrowserRouter>
  
  );
}

export default App;