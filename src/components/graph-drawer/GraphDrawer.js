import React from 'react'
import GraphDrawerNavbar from '../graph-drawer-navbar/GraphDrawerNavbar'
import FlexGraph from "../graph/FlexGraph";


class GraphDrawer extends React.Component {

    _drawGraph = (data) => {
        this.graph.drawGraph(data)
    };

    render() {
        return (
            <div>
                <GraphDrawerNavbar fileUploaded={this._drawGraph}/>
                <FlexGraph onRef={ref => this.graph = ref}/>
            </div>
        )
    }
}

export default GraphDrawer;