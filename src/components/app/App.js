import React from 'react';
import Navbar from "../navbar/Navbar";
import FlexPlot from "../plot/FlexPlot";


import './App.css';
import GlobalSnackbar from "../snackbar/GlobalSnackbar";

class App extends React.Component {

    _drawPlot = () => {
        this.plot.drawPlot()
    };

    render() {
        return (
            <div>
                <Navbar draw={this._drawPlot}/>
                <FlexPlot onRef={ref => this.plot = ref}/>
                <GlobalSnackbar/>
            </div>
        );
    }
}

export default App;
