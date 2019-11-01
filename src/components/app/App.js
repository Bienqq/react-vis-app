import React from 'react';
import Navbar from "../navbar/Navbar";
import FlexPlot from "../plot/FlexPlot";


import './App.css';

class App extends React.Component {

    state = {
        drawPlot: false,
    };

    _drawPlot = () => {
        this.setState({drawPlot: true})
    };

    render() {
        return (
            <div>
                <Navbar draw={this._drawPlot}/>
                <FlexPlot draw={this.state.drawPlot}/>
            </div>
        );
    }
}

export default App;
