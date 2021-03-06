import React, { Component } from 'react';
import Header from './components/header';
import store from './store';
import { Provider} from 'react-redux';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <Route path="/" exact component={Home}>
            </Route>   
            <Route path="/detail" exact component={Detail}>
            </Route>  
          </BrowserRouter>

        </div>
        
        
      </Provider>
    );
  }
}

export default App;
