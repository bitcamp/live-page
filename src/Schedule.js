import React, { Component } from 'react';
import Tabletop from 'tabletop';
import { Timeline,Typography } from 'antd';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const { Title, Paragraph, Text } = Typography;

class Schedule extends Component{
    
    constructor(){
        super();
        this.state = {
            data: [],
            columnNames: [],
            date: new Date(),
        }
    }

    componentDidMount(){
        Tabletop.init({
            key: '1eRtAXuTrZ9IzpYGqTNh6mTQUdlOb6_d0kHVmPu2QfL0',
            callback: googleData => {
                this.setState({
                    data: googleData['App  Website Schedule']['elements'],
                    columnNames: googleData['App  Website Schedule']['columnNames']
                })
            },
            simpleSheet: false
        })
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    filterEvents(){
        let passed = []
        let current = []
        let future = []

        for(let i = 0; i < this.state.data.length; i++){
            let event = this.state.data[i];
            let startDate = new Date(event[this.state.columnNames[6]])
            let endDate = new Date(event[this.state.columnNames[11]])

            if(this.state.date >= startDate.getTime() && this.state.date <= endDate.getTime()){
                current.push(event)
            }
            else if(this.state.date < endDate){
                if(future.length < 3){
                    future.push(event)
                }
            }
            else if(this.state.date > startDate){
                if(passed.length < 3){
                    passed.push(event)
                }
                else{
                    passed.shift();
                    passed.push(event);
                }
            }
        }

        return [passed, current, future]
    }

    displayEvents(events, passed, color){
        
        let components = []
        let day_map = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}

        for(let i = 0; i < events.length; i++){
            let item = events[i]

            let title = item[this.state.columnNames[1]]
            let startDate = new Date(item[this.state.columnNames[6]])
            let endDate = new Date(item[this.state.columnNames[11]])
            
            let text = ""

            if(startDate.getDay() == endDate.getDay()){
                text = title + ": " + day_map[startDate.getDay()] + " " + startDate.toLocaleTimeString() + " - " + endDate.toLocaleTimeString()
            }
            else{
                text = title + ": " + day_map[startDate.getDay()] + " " + startDate.toLocaleTimeString() + " - " + day_map[endDate.getDay()] + " " + endDate.toLocaleTimeString()
            }

            if(passed){
                components.push(
                    <Timeline.Item key={i}><strike style={{color : color}}>{text}</strike></Timeline.Item>
                )
            }
            else{
                components.push(
                    <Timeline.Item key={i}><Text style={{color : color}}>{text}</Text></Timeline.Item>
                )
            }
        }

        return components
    }

    render(){

        if(this.state.data.length === 0){
            return(
                <div>
                    <Spin indicator={antIcon} />
                    <h3 style={{color: 'white'}}>Loading</h3>
                </div>
            )
           
        }

        let res = this.filterEvents();

        return (

            <div>
                <h2 style={{color: 'white'}}>Schedule</h2>
                <br></br>

                <Timeline>
                    
                    {
                        this.displayEvents(res[0],true,'white')
                    }
                    {
                        this.displayEvents(res[1],false,'#FF6F3F')
                    }
                    {
                        this.displayEvents(res[2],false,'#FF3F46')
                    }

                </Timeline>
            </div>
        );
    }
}

export default Schedule;