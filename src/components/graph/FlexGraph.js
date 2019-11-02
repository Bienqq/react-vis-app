import React from 'react'
import Graph from "react-graph-vis";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import {processAndValidateGraphData} from "../../utils/GraphUtils";
import {showSnackbar} from "../../actions/actions";
import {connect} from 'react-redux';

const options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "lightgray",
        arrows: {
            to: {
                enabled: false
            },
            from: {
                enabled: false
            }
        }
    },
    nodes: {
        font: {
            color: "ghostwhite"
        }
    },
    height: "400px",
    width: '600px',
};


class FlexGraph extends React.Component {

    state = {
        graphData: {
            nodes: [],
            edges: []
        },
        finished: false

    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    drawGraph = (csvFile) => {
        let nodes, edges;
        try {
            [nodes, edges] = processAndValidateGraphData(csvFile);
        } catch (e) {
            console.error(e);
            this.props.showSnackbar(true, {message: e.message});
        }
        this.setState({graphData: {nodes: nodes, edges: edges}, finished: true})
    };

    render() {
        return (
            <Box flexDirection="column" flexWrap="nowrap" display="flex" justifyContent="center" alignItems="center"
                 pt={1}>

                <Box>
                    <Graph
                        graph={this.state.graphData}
                        options={options}
                    />
                </Box>

                {this.state.finished && <Box mt={4}>
                    <Button color="primary" size="small" variant="contained">
                        <ShareOutlinedIcon/> Share
                    </Button>
                </Box>}

            </Box>
        )
    }
}

//todo handle snackbar option - error variant in this case
const mapDispatchToProps = dispatch => {
    return {
        showSnackbar: (show, options) => dispatch(showSnackbar(show, options)),
    }
};

export default connect(null, mapDispatchToProps)(FlexGraph)