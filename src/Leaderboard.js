import React, { Component } from 'react';

import { Card } from 'antd';
import { Divider } from 'antd';

import { Row, Col } from 'antd';
import redLogo from './assets/RedTeamLogo.png'
import greenLogo from './assets/GreenTeamLogo.png'
import blueLogo from './assets/BlueTeamLogo.png'
import leaderboardLogo from './assets/leaderboard.svg'
import { Typography } from 'antd';
import Team from './Team.js'

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

class Leaderboard extends Component{

    constructor(){

        super();
        this.state = {
            bluePoints: 0,
            redPoints: 0,
            greenPoints: 0
        }
        
    }
    componentDidMount(){

        this.setState({
            bluePoints: 1000,
            redPoints: 200,
            greenPoints: 10
        })

    }

    render(){
        return(

            <Card bordered={true} style={{ backgroundColor:'white', borderRadius:'15px', marginTop:'10%', height:'90%'}}>
                <Meta
                    title={<div><img src={leaderboardLogo} style={{height:'18%',width:'18%', float:'left'}}/><h1 style={{color:"#1A2E33", paddingLeft:'35%',fontFamily: 'Aleo'}}><b>Leaderboard</b></h1></div>}
                />
                {/* <Divider style={{marginBottom:'5%',marginTop:'1%'}}/> */}
                <Divider/>

                <div>
                    <Row>
                        {/* <Col span={6}/>
                        <Col span={12}>
                        <Team logo={blueLogo} team="Blue" points={this.state.bluePoints} outerColor="gold"/>
                        </Col>
                        <Col span={6}/> */}
                        <Team logo={blueLogo} team="Blue" points={this.state.bluePoints} outerLeftColor="#FFDD29" outerRightColor="#FDB040" innerColor="#FFF0CE"/>
                    </Row>
                    <Row>
                        <Team logo={redLogo} team="Red" points={this.state.redPoints} outerLeftColor="#F0EFF5" outerRightColor="#8D9093" innerColor="#F4F4F4"/>
                        {/* <Col span={12}>
                        <Team logo={redLogo} team="Red" points={this.state.redPoints} outerColor="silver"/>
                        </Col>
                        <Col span={12}>
                        <Team logo={blueLogo} team="Green" points={this.state.greenPoints} outerColor="#cd7f32"/>
                        </Col> */}
                    </Row>
                    <Row>
                        <Team logo={greenLogo} team="Green" points={this.state.greenPoints} outerLeftColor="#FFA15C" outerRightColor="#925401" innerColor="#E5D4C0"/>
                    </Row>
                </div>
                
            </Card>
           
        )
    }

}

export default Leaderboard;