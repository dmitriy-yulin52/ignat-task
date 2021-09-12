import React, {useState} from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import { Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


function Header() {

    const options = [
        { key: 1, text: <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>, value: 1 },
        { key: 2, text: <NavLink to={PATH.JUNIOR}>Junior</NavLink>, value: 2 },
        { key: 3, text: <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>, value: 3 },
    ]



    return (
        <>
            <Menu compact>
                <Dropdown text='Levels' options={options} simple item />
            </Menu>
        </>
    )
}

export default Header


