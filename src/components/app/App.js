import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import GlobalSnackbar from "../snackbar/GlobalSnackbar";
import ChartDrawer from "../3d-chart-drawer/ChartDrawer";
import GraphDrawer from "../graph-drawer/GraphDrawer";

import './App.css';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={ChartDrawer}/>
                <Route path="/graph-drawer" component={GraphDrawer}/>
            </BrowserRouter>
            <GlobalSnackbar/>
        </div>
    );

}

export default App;
