import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import './components/pages/Recenzii';
import Recenzii from './components/pages/Recenzii';
import Blog from './components/pages/Blog';



function App () {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component ={Services}/>
                <Route path='/products' component ={Products}/>
                <Route path='/sign-up' component ={SignUp}/>
                <Route path='/recenzii' component={Recenzii}/>
                <Route path='/blog' component={Blog}/>

            </Switch>

        </Router>

        </>
    );
    
}

export default App;