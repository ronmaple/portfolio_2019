import React, { Component } from 'react'

import '../styles/ItemCard.scss';

export default class ItemCard extends Component {
    render() {
        let {src, title, description} = this.props;

        return (
            <div className="item_card">

                <div className="item_card_image">
                    <img src={src} />
                </div>
                
                <div className="item_card_description">
                    
                    <div className="item_card_description__title">
                        <h4>{title}</h4>
                    </div>
                    
                    <div className="item_card_description__body">
                        <p>{description}</p>
                    </div>

                </div>

            </div>
        )
    }
}
