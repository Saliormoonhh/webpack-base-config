//modules
import React, {Component, Suspense, lazy} from 'react';
import {Layout} from 'antd';
import io from 'socket.io-client';

const {Content} = Layout;
const CurveMap = lazy(() => import('&components/curveMap'));
import {getTemperatureData} from "&helpers";
import Loading from '&components/loading';
import './styles.less';

class HomepageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tem: [],
      wet: []
    };
    this.temConfig ={
      chart: {
        data: [
          {
            type: '温度',
          }
        ]
      },
      scale: {
        time: {
          alias: '时间'
        },
        temperature: {
          alias: '温度(°C)',
          min: 0,
          max: 40
        },
        type: {
          type: "cat"
        }
      }
    };
    this.wetConfig = {
      chart: {
        data: [
          {
            type: '湿度',
          }
        ]
      },
      scale: {
        time: {
          alias: '时间'
        },
        humidity: {
          alias: '湿度(%)',
          min: 0,
          max: 40
        },
        type: {
          type: "cat"
        }
      }
    }
  };
  setData = () => {
    let arr = [];
    for(let i = 0; i < 20; i ++ ){
      arr.push({
        time: '2019-2-' + i,
        temperature: Math.random()*40,
        type: '温度(°C)'
      })
    }
    let arr2 = [];
    for(let i = 0; i < 20; i ++ ){
      arr2.push({
        time: '2019-2-' + i,
        humidity: Math.random()*40,
        type: '湿度(%)'
      })
    }
    this.setState({
      tem: arr,
      wet: arr2
    })
  };
  componentDidMount() {
    // const websocket = new WebSocket('ws://10.20.0.64:8080/websocket/sendOne?id=1');
    // websocket.onopen = function () {
    //   console.log('连接成功');
    // }
    // websocket.onerror = function (err) {
    //   console.log(err);
    // }
    // const socket = io('ws://10.20.0.64:8080/websocket/sendOne?sessionid=1');
    // socket.on('connection',data => {
    //   console.log(data);
    // });
    // socket.on('');
    // socket.on('', data => {
    //   console.log(data);
    // });
  }

  componentWillMount() {
    // getTemperatureData().then(res => {
    //   const {data} = res;
    //   this.setState({
    //     tem: data
    //   });
    // })
    //   .catch(err => {
    //     console.log(err);
    //   });
    const {setData} = this;
    setData();
    window.setInterval(() => {
      setData();
    },2000);
  }

  render() {
    const {tem, wet} = this.state;
    const {temConfig, wetConfig} = this;
    return (
      <Content>
        <div className='content-container'>
          <div className='map-container'>
            <div className='map-header'>温度实时变化</div>
            <Suspense fallback={<Loading/>}>
              <CurveMap source={tem} config={temConfig} lineColor={["type", ['#33ff33','#33ff33']]} position='time*temperature'/>
            </Suspense>
          </div>
          <div className='map-container'>
            <div className='map-header'>湿度实时变化</div>
            <Suspense fallback={<Loading/>}>
              <CurveMap source={wet} config={wetConfig} lineColor={["type", '#33ff33']} position='time*humidity'/>
            </Suspense>
          </div>
          <div className='map-container'>
            <div className='map-header'>湿度实时变化</div>
            <Suspense fallback={<Loading/>}>
              <CurveMap source={wet} config={wetConfig} lineColor={["type", '#33ff33']} position='time*humidity'/>
            </Suspense>
          </div>
          <div className='map-container'>
            <div className='map-header'>湿度实时变化</div>
            <Suspense fallback={<Loading/>}>
              <CurveMap source={wet} config={wetConfig} lineColor={["type", '#33ff33']} position='time*humidity'/>
            </Suspense>
          </div>
        </div>
      </Content>
    )
  }
}

export default HomepageContent;