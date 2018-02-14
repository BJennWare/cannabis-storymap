import React, { Component } from 'react';

import './styles.css'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Card from "antd/es/card/index";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import TwoSidedMap from "../../components/TwoSidedMap";
import OneSidedMap from "../../components/OneSidedMap";

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default class UsaCannabisInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Row type='flex' gutter={16}>
          <Col span={20} offset={2}>
            <Card title="Regulation in USA" align='justify'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Card>
          </Col>
          <Col span={2}/>
        </Row>

        <Row type='flex' gutter={16}>
          <Col span={10} offset={2}>
            <Row>
              <Card>
                <LineChart width={600} height={300} data={data}
                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend/>
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}/>
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                </LineChart>
              </Card>
            </Row>
            <Row type='flex'>
              <Card align='justify'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Card>
            </Row>
          </Col>
          <Col span={10}>
            <Card align='justify'>
              <OneSidedMap/>
            </Card>
          </Col>
          <Col span={2}/>
        </Row>
      </div>
    );
  }
}