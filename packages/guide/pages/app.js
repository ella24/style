import './theme/main.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Colors from 'Components/sections/Colors';
import Fonts from 'Components/sections/Fonts';
import Four04 from 'Components/sections/404';
import Home from 'Components/sections/Home';
import Linters from 'Components/sections/Linters';
import Nav from 'Components/Nav';
import Policies from 'Components/sections/Policies';
import React from 'react';
import ReactDOM from 'react-dom';
import Rig from 'Components/sections/Rig';
import ThemeEisbaer from './components/sections/ThemeEisbaer';
import TipSheets from 'Components/sections/TipSheets';
import { component } from './styles.scss';

const App = () => (
  <Router basename='/style'>
    <div className={component}>
      <Nav />
      <div className='well'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-12'>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/policies/' component={Policies} />
                <Route path='/tip-sheets/' component={TipSheets} />
                <Route path='/graphics-rig/' component={Rig} />
                <Route path='/fonts/' component={Fonts} />
                <Route path='/colors/' component={Colors} />
                <Route path='/linters/' component={Linters} />
                <Route path='/themes/eisbaer/' component={ThemeEisbaer} />
                <Route path='/404/' component={Four04} />
                <Route path='/404.html' component={Four04} />
                <Route component={Four04} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
