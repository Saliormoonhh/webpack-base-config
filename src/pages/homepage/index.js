import {hot} from 'react-hot-loader';
import React from 'react';
import './styles.less';
import {Layout} from 'antd';

import Content from './content';
import Sider from './sider';
import Header from './header';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout id="homepage">
        <Sider/>
        <Layout>
          <Header/>
          <Content/>
        </Layout>
      </Layout>
    )
  }
}

export default hot(module)(Homepage);