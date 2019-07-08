import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend
} from "bizcharts";

class Curve extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chart: null
    };
  }
  GetG2Instance = (G2Instance) => {
    this.setState({
      chart: G2Instance
    })
  };

  render(){
    const {source, lineColor, config, position} = this.props;
    const {scale} = config;
    const {GetG2Instance} = this;
    return (
      <Chart
        className="map"
        height={300}
        scale={scale}
        forceFit
        data={source}
        onGetG2Instance={GetG2Instance}>
        <Tooltip />
        <Axis/>
        <Legend />
        <Geom
          type='line'
          position={position}
          color={lineColor}
          shape="smooth"
          size={2}
        />
      </Chart>
    );
  }
}

export default Curve;