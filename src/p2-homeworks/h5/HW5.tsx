import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div style={{marginLeft: '10px'}}>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
