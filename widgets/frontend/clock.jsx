import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };

        this.tick = this.tick.bind(this);        
    }

    tick() {
        this.setState({ time: new Date() });
    }

    componentDidMount() {
        const intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount () {
        clearInterval(intervalID);
    }



    render() {

        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        
        if(hours < 10) {
            hours = `0${hours}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
    
        return(
            <>
                <h1>Clock</h1>
                <div className="clock">
                    <div className="time-holder">
                        <span className="title">Time:</span>
                        <span className="text">{hours}:{minutes}:{seconds}</span>
                    </div>
                    <div className="date-holder">
                        <span className="title">Date: </span>
                        <span className="text">{this.state.time.toDateString()}</span>
                    </div>
                </div>
            </>
        )
    }

}



export default Clock;