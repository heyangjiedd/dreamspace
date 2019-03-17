import React from 'react';
import {BrowserRouter,Redirect, Route} from 'react-router-dom'
import home from '../page/home'
import login from '../page/login'
import register from '../page/register'

export default function () {
    return <BrowserRouter>
        <div>
            <Route exact path={"/"} render={()=>(<Redirect to="/login"/>)}></Route>
            <Route exact path={"/home"} component={home}></Route>
            <Route path={"/login"} component={login}></Route>
            <Route path={"/register"} component={register}></Route>
        </div>
    </BrowserRouter>
}