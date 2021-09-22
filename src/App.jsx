import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './redux/store';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import CallList from './components/CallList.jsx';
import CallDetails from './components/CallDetails.jsx';
import Inbox from './components/Inbox.jsx';
import AllCalls from './components/AllCalls.jsx';
import Filter from './components/Filter.jsx';
import BottomNavBar from './components/BottomBar.jsx';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div>
          <Header/>
          <NavBar />
        </div>
        <div className="container2">
          <div className="container-view">
            <Switch>
              <Route path='/' exact component={CallList}/>
              <Route path='/inbox' component={Inbox}/>
              <Route path='/allCalls' component={AllCalls}/>
              <Route path='/filter' component={Filter}/>
              <Route path='/:id' component={CallDetails}/>
            </Switch>
          </div>
          <div>
            <BottomNavBar />
          </div>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('app'));

export default App;
