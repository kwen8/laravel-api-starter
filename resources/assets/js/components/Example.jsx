import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
  componentWillMount () {
    //测试api接口
    axios.post('/authorizations', {
      name: 'admin',
      email: 'admin@admin.com',
      password: 'admin'
    }).then((data) => {
      console.log(data);
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">Example Component</div>
              <div className="panel-body">
                I'm an example component!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
