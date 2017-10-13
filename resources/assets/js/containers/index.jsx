import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userInfo'
import Example from '../components/Example'
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      initDone: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.initDone
            ? <Example />
            : <div>正在加载...</div>
        }
      </div>
    )
  }
  componentDidMount() {
    // 更改状态
    this.setState({
      initDone: true
    })
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
