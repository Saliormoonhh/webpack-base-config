import React from 'react';
import {Icon} from 'antd';

import './styles.less';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loading'>
        <Icon type="loading" />
        loading...
      </div>
    )
  }
}

export default Loading;