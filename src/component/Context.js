import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Head from './Head'
import Home from '../page/Home/index'
import News from '../page/News/index'
import Tips from '../page/Tips/index'
import Footer from '../component/footer'
class Context extends React.Component {
    render() {
        return <Router>
            <Head />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/News" exact component={News}></Route>
                <Route path="/tips" exact component={Tips}></Route>
            </Switch>
            <Footer></Footer>
        </Router>
    }
}

export default Context