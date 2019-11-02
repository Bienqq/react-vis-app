import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js/dist/plotly-gl3d.min'
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux'
import MathParser from "../../utils/MathParser";

const PlotlyComponent = createPlotlyComponent(Plotly);

const layout = {
    title: '3D Chart',
    width: '800',
    height: '600',
    autosize: true,
};
const config = {
    showLink: false,
    displayModeBar: true
};

class FlexPlot extends React.Component {

    state = {
        x: null,
        y: null,
        z: null
    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    drawPlot = () => {
        const {formula, start, end, step} = this.props;
        try {
            const parser = new MathParser(formula, start, end, step);
            const {x, y, z} = parser.evaluate();
            this.setState({x, y, z})
        } catch (e) {
            console.error(e)
        }
    };

    render() {
        const data = [{
            type: 'surface',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
            x: this.state.x,
            y: this.state.y,
            z: this.state.z,

            marker: {         // marker is an object, valid marker keys: #scatter-marker
                color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
            },
        },
        ];
        return (
            <Box flexDirection="row" flexWrap="nowrap" display="flex" justifyContent="center" pt={1}>
                <PlotlyComponent data={data} layout={layout} config={config}/>
            </Box>
        )
    }
}

const mapStateToProps = ({formula, start, end, step}) => ({formula, start, end, step});

export default connect(mapStateToProps)(FlexPlot);