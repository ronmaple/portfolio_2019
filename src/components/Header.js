import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles/Header.scss';

export default class Header extends Component {
    render() {
        return (
            <nav className="header">
                <div className="logo">
                    <Link to="/">RM</Link>
                </div>
                <div className="links">
                    {/* <Link to="/resume">Resume</Link> */}
                    {/* <Link to="/">Development</Link> */}
                </div>
            </nav>
        )
    }
}
