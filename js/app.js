import React, {Component} from 'react'
import {Router} from 'react-router'
import {
  HashRouter,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'
import { store } from './Store'
import { Provider } from 'react-redux'
import Landing from './index'
import Search from './Search'
import Layout from './Layout'
import Details from './Details'

const Routes = () => (
    <Layout>
        <Route exact path='/'component={Landing} />
        <Route path='/search'component={Search} />
        <Route path='/details/:id'component={Details} />
    </Layout>
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {Routes()}
                </BrowserRouter>
            </Provider>
        )
    }
}

App.Routes = Routes

export default App
