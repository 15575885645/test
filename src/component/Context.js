import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from '../page/Home/index'
import News from '../page/News/index'
import Tips from '../page/Tips/index'
class Context extends React.Component {
    render() {
        return <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="tips" exact component={News}></Route>
                <Route path="News" exact component={Tips}></Route>
            </Switch>
        </Router>
    }
}

export default Context