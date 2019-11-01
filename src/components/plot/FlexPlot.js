import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js/dist/plotly-gl3d.min'
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux'
import MathParser from "../../utils/MathParser";
import CircularProgress from '@material-ui/core/CircularProgress';

const PlotlyComponent = createPlotlyComponent(Plotly);

const layout = {                     // all "layout" attributes: #layout
    title: '3D Chart',  // more about "layout.title": #layout-title
    xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
        title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
    },
    width: 600,
    height: 600,
    autosize: true,

};
const config = {
    showLink: false,
    displayModeBar: true
};


class FlexPlot extends React.Component {

    state = {
        loading: false,
        x: null,
        y: null,
        z: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.draw !== prevProps.draw) {
            this.setState({loading: true})
        } else if (!prevState.loading && this.props.draw) {

            const {formula, start, stop, step} = this.props;
            const parser = new MathParser(formula, start, stop, step);
            parser.evaluate().then(result => {
                const {x, y, z} = result;
                this.setState({x: x, y: y, z: z, loading: false})
            });

        }
    }

    render() {
        if (this.props.draw && !this.state.loading) {
            const data = [{
                type: 'surface',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
                x: this.state.x,
                y: this.state.y,
                z: this.state.z,

                marker: {         // marker is an object, valid marker keys: #scatter-marker
                    color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
                },
                name: 'bar chart example' // #bar-name
            },
            ];
            return (<Box flexDirection="row" flexWrap="nowrap" display="flex" justifyContent="center" pt={1}>
                <PlotlyComponent data={data} layout={layout} config={config}/>
            </Box>)
        } else if (this.props.draw && this.state.loading) {
            return (<CircularProgress/>)
        } else {
            return null
        }

    }
}

const mapStateToProps = ({formula, start, end, step}) => ({formula, start, end, step});

export default connect(mapStateToProps)(FlexPlot);