//modules
import React, {Component} from 'react';
import {Layout, Switch} from 'antd';

const {Sider} = Layout;
import './styles.less';

//components

class HomepageSider extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Sider width={275}>
        <div className="sider-header">
          <img src=''/>
          强哥责任有限公司
        </div>
        <div className="sider-body">
          <h5 className="title">开关控制</h5>
          <ul>
            <li className="section">
              <span className="discription">温度测量开关</span>
              <Switch checkedChildren="开" unCheckedChildren="关"/>
            </li>
            <li className="section">
              <span className="discription">湿度测量开关</span>
              <Switch checkedChildren="开" unCheckedChildren="关"/>
            </li>
          </ul>
        </div>
      </Sider>
    )
  }
}

export default HomepageSider;