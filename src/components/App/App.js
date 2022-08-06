import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: 'AlexDarincevt',
  });
  const [signedIn, setSignedIn] = React.useState(true);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main signedIn={signedIn} />
          </Route>
          <Route exact path='/saved-news'>
            <SavedNews
              signedIn={signedIn}
              currentUser={currentUser}
            ></SavedNews>
          </Route>
        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
