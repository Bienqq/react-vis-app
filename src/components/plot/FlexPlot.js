import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js/dist/plotly-gl3d'
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux'
import MathParser from "../../utils/MathParser";
import {globalSnackbar, globalLinearProgress} from "../../actions/actions";
import Button from '@material-ui/core/Button';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import axios from 'axios'
import API from '../../config/config'
import ShareLinkDialog from "../common/ShareLinkDialog";

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

    constructor(props) {
        super(props);
        this.plotRef = React.createRef()
    }

    state = {
        x: null,
        y: null,
        z: null,
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

    _onShareButtonClicked = () => {
        const {formula, start, end, step, showLinearProgress, showSnackbar} = this.props;
        showLinearProgress(true);
        axios.post(API.SHARE_URL, {formula, start, end, step})
            .then(response => {
                this.setState({showDialog: true, shareLink: response.data.share_url})
            })
            .catch(err => {
                showSnackbar(true, {message: err.message});
                console.error(err)
            })
            .finally(() => showLinearProgress(false))
    };

    _onShareDialogClose = () => {
        this.setState({showDialog: false})
    };

    drawPlot = () => {
        const {formula, start, end, step} = this.props;
        try {
            const parser = new MathParser(formula, start, end, step);
            const {x, y, z} = parser.evaluate();
            this.setState({x, y, z, finished: true})
        } catch (err) {
            console.error(err);
            this.props.showSnackbar(true, {message: "Cannot parse function!"});
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
            <Box flexDirection="column" flexWrap="nowrap" display="flex" justifyContent="center" alignItems="center"
                 pt={1}>
                <PlotlyComponent ref={this.plotRef} data={data} layout={layout} config={config}/>

                {this.state.finished &&
                <Box>
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

const mapStateToProps = ({formula, start, end, step}) => ({formula, start, end, step});

//todo handle common option - error variant in this case
const mapDispatchToProps = dispatch => {
    return {
        showSnackbar: (show, options) => dispatch(globalSnackbar(show, options)),
        showLinearProgress: (show) => dispatch(globalLinearProgress(show))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FlexPlot);