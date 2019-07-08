import React from 'react';
import {render} from 'react-dom';
import './static/styles/reset.css';
import './static/styles/mydefault.less';

import Homepage from './pages/homepage/index';

render(
  <Homepage/>,
  document.getElementById('root')
);

export default Homepage;