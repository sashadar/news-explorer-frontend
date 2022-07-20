import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
