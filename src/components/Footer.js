import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_image" id="foot_image">
                    <img src="https://media.licdn.com/dms/image/C5603AQFDtwPg0zxr4w/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=n4vUqzxmk3bTTBSlhWSY9TyOrl3-c40n78TehmrWkt4" />
                </div>
                <div className="footer_body">
                    <div className="footer_body__description">
                        <h5>please feel free to send me a message directly via my Linkedin page below, or send me an email: ronmapue@gmail.com</h5>
                    </div>
                    <div className="footer_body__link">
                        <a href="https://codepen.io/RMapue" target="_blank"> <img src="https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/codepen_placeholder.png" /></a>
                        <a href="https://www.linkedin.com/in/ronmapue/" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/linkedin_placeholder.png" /></a>
                        <a href="https://www.freecodecamp.org/ronmaple" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/fcc_placeholder.svg" /></a>
                        <a href="https://github.com/ronmaple" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/github_placeholder.png" /></a>
                    </div>   
                </div>
            </div>
        )
    }
}
