/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader.jsx';
import {MainPage, ComicsPage} from '../pages'

const App = () => {
  
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route exact path="/comics">
              <ComicsPage/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
