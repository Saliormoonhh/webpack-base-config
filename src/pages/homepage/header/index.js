import React from 'react';
import {Layout, Icon, Badge, Avatar} from 'antd';
const {Header} = Layout;

import './styles.less';
import qq from '&static/images/qq.jpg';

class HomepageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <nav>
          <div>
            <span>今日天气</span>
          </div>
          <ul className='nav-right'>
            <li className='search'>
              <Icon type='search' style={{fontSize: '20px'}}/>
            </li>
            <li className='message'>
              <Badge count={5}>
                <Icon type="message" style={{fontSize: '20px'}}/>
              </Badge>
            </li>
            <li className='avatar'>
              <Avatar src={qq} />
              <span>森林迷了鹿</span>
            </li>
          </ul>
        </nav>
      </Header>
    )
  }
}

export default HomepageHeader;