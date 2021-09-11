import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Redirect, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorMid from "./pages/Junior-Mid";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_MID: '/junior+'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_MID} render={() => <JuniorMid/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
