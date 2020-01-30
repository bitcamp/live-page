import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './assets/fire.gif'
import bitcamp_logo from './assets/bitcamp-logo-icon.svg'
import bitcamp_text from './assets/bitcamp-logo-text.svg'
import logs from './assets/Logs.png'

class Main extends Component{
    
    constructor(){

        super();
        this.state = {
            date: new Date()
        }
        
    }

    componentDidMount(){
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

    render(){

        let day_map = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}

        return(
            <div>
                {/* <img src={logo} className="App-logo" alt="logo" style={{marginLeft:'auto', marginRight:'auto'}}/> */}
                <p style={{visibility:'hidden'}}>don't judge</p>
                <img src={bitcamp_logo} />
                <p style={{visibility:'hidden'}}>don't judge</p>
                <img src={bitcamp_text}/>
                <p style={{visibility:'hidden'}}>don't judge</p>
                {/* <h1
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{marginLeft:'auto', marginRight:'auto'}}
                >
                    Bitcamp
                </h1> */}

                <h2 className="App-link" style={{marginLeft:'auto', marginRight:'auto', color:'#CBF2FF'}}>{day_map[this.state.date.getDay()] + " " + this.state.date.toLocaleTimeString()}</h2>
            </div>
        )

    }
}

export default Main;