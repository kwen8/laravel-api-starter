import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import App from './containers'
import configureStore from "./store/configureStore";

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App} />
      </Router>
    )
  }
}
const store = configureStore()
render(
  <Provider store={store}>
    <RouterMap history={createBrowserHistory()} />
  </Provider>,
  document.getElementById('root')
)