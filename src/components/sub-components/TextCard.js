import React, { Component } from 'react'

import '../styles/TextCard.scss';

export default class TextCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__title">
                    <h4>Welcome to my site!</h4>    
                </div>
                <div className="card__body">
                    <p>{BODY}</p>
                </div>
                <div className="card__footer">
                    <p>linkedin / freecodecamp / codepen / github</p>
                </div>
            </div>
        )
    }
}
