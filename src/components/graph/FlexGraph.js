import React from 'react'
import Graph from "react-graph-vis";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import {processAndValidateGraphData} from "../../utils/GraphUtils";
import {globalSnackbar, globalLinearProgress} from "../../actions/actions";
import axios from 'axios'
import API from '../../config/config'
import ShareLinkDialog from "../common/ShareLinkDialog";
import {connect} from 'react-redux';

const graphOptions = {
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
        finished: false,
        showDialog: false,
        shareLink: ''
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

    _onShareButtonClicked = () => {
        const graphData = this.prepareRequestData();
        console.log('REQUEST DATA')
        console.log(graphData)
        const {showSnackbar, showLinearProgress} = this.props;
        axios.post(API.SHARE_GRAPH_URL, graphData)
            .then(response => {
                console.log('RESPONSE DATA')
                console.log(response.data);
                this.setState({showDialog: true, shareLink: response.data.shareUrl})
            })
            .catch(err => {
                showSnackbar(true, {message: err.message});
                console.error(err)
            })
            .finally(() => showLinearProgress(false))
    };

    prepareRequestData(){
        const connections = this.state.graphData.edges.map(item => ({connection_from: item.from, connection_to: item.to}));
        const nodes = this.state.graphData.nodes.map(item => ({node:item.label}));
        return {connections, nodes}
    }

    _onShareDialogClose = () => {
        this.setState({showDialog: false})
    };

    render() {
        return (
            <Box flexDirection="column" flexWrap="nowrap" display="flex" justifyContent="center" alignItems="center"
                 pt={1}>

                <Box>
                    <Graph graph={this.state.graphData} options={graphOptions}/>
                </Box>

                {this.state.finished && <Box mt={4}>
                    <Button color="primary" size="small" variant="contained" onClick={this._onShareButtonClicked}>
                        <ShareOutlinedIcon/> Share
                    </Button>
                </Box>}

                <ShareLinkDialog handleClose={this._onShareDialogClose} open={this.state.showDialog}
                                 link={this.state.shareLink}/>

            </Box>
        )
    }
}

//todo handle common option - error variant in this case
const mapDispatchToProps = dispatch => {
    return {
        showSnackbar: (show, options) => dispatch(globalSnackbar(show, options)),
        showLinearProgress: (show) => dispatch(globalLinearProgress(show))
    }
};

export default connect(null, mapDispatchToProps)(FlexGraph)