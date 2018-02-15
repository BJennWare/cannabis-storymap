import React, { Component } from 'react';
import './styles.css';
import OneSidedMap from "./OneSidedMap";
import { Slider } from 'antd';

export default class TwoSidedMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clipPosition: 50,
      childWidth: 100,
      childHeight: 100,
    };
  }

  onChange = (value) => {
    this.setState({
      clipPosition: value,
    });
  };

  onChangeDimension = (dimen) => {
    this.setState({ childWidth: dimen.width, childHeight: dimen.height });
  };

  getRange = (data) => {
    const keys = Object.keys(data);
    let min, max;
    for (let index in keys) {
      if (keys.hasOwnProperty(index)) {
        if (min) min = Math.min(min, data[keys[index]]);
        else min = data[keys[index]];

        if (max) max = Math.max(max, data[keys[index]]);
        else max = data[keys[index]];
      }
    }

    return [min, max];
  };

  render() {
    const clipPos = `${this.state.childWidth / (100 / this.state.clipPosition)}px`;
    let leftRange = this.getRange(this.props.leftData);
    let rightRange = this.getRange(this.props.rightData);

    if(this.props.leftRange) leftRange = this.props.leftRange;
    if(this.props.rightRange) rightRange = this.props.rightRange;

    const maps = (
      <div className='two-sided-map-container'>
        <div className='two-sided-map-slider' style={{
          zIndex: 999,
          width: `${this.state.childWidth}px`,
          'margin-top': `${this.state.childHeight / 2}px`
        }}>
          <Slider min={0} max={100} value={this.state.clipPosition} onChange={this.onChange}/>
        </div>
        <OneSidedMap
          min={leftRange[0]} max={leftRange[1]}
          onDimenChange={this.onChangeDimension}
          onHover={this.props.showData}
          data={this.props.leftData} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
          endClip={clipPos}/>
        <OneSidedMap
          min={rightRange[0]} max={rightRange[1]}
          onHover={this.props.showData}
          data={this.props.rightData} colors={['#00FFFF', '#0000FF']}
          startClip={clipPos}
          endClip={`${this.state.childWidth}px`}/>
      </div>
    );

    return (
      <div>
        <OneSidedMap
          min={leftRange[0]} max={leftRange[1]}
          onDimenChange={this.onChangeDimension}
          onHover={this.showData}
          data={this.props.leftData} colors={['#FFFF00', '#FF0000']} startClip={'0px'}
          endClip={clipPos}/>
      </div>
    );
  }
}