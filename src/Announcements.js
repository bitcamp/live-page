import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import fire from './assets/fire.gif'

class Announcements extends Component{

    constructor(){

        super();
        this.state = {
            announcements: []
        }
        
    }

    componentDidMount(){

        this.setState({
            announcements: [
                {
                  title: new Date().toLocaleTimeString(),
                  description: 'Red Wristband lunch time!'
                },
                {
                  title: new Date().toLocaleTimeString(),
                  description: 'Orange Wristband Lunch time!'
                },
                {
                  title: new Date().toLocaleTimeString(),
                  description: 'Blue Wristband Lunch time!'
                },
                {
                  title: new Date().toLocaleTimeString(),
                  description: 'White Wristband Lunch time!'
                },
            ]
        })

    }

    render(){

        return(
            <div>
                <h2 style={{color: 'white'}}>Announcements</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.announcements}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={fire} />}
                        title={<a style={{color : '#FFEF3F '}}>{item.title}</a>}
                        description={<div style={{color : '#CBF2FF'}}>{item.description}</div>}
                        />
                    </List.Item>
                    )}
                />
            </div>
        )

    }
}

export default Announcements;