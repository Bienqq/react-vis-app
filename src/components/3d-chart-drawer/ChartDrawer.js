import React from 'react';
import ChartDrawerNavbar from "../chart-drawer-navbar/ChartDrawerNavbar";
import FlexPlot from "../plot/FlexPlot";

class ChartDrawer extends React.Component {

    _drawPlot = () => {
        this.plot.drawPlot()
    };

    render() {
        return (
            <React.Fragment>
                <ChartDrawerNavbar draw={this._drawPlot}/>
                <FlexPlot onRef={ref => this.plot = ref}/>
            </React.Fragment>
        );
    }
}

export default ChartDrawer;