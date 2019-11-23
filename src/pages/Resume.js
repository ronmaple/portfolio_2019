import React, { Component } from 'react'

import ItemCard from '../components/sub-components/ItemCard';

import BarChart from '../components/sub-components/BarChart';

import './styles/Resume.scss';

export default class Resume extends Component {
    render() {
        const LOGO_PLACEHOLDER = 'https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/logo-placeholder.jpg';

        return (
            <div className="resume">
              <div className="resume_summary">
                <div className="resume_summary__title">
                    <h1>Core Skills</h1>
                </div>



                {/* <BarChart data={[5,10,1,3]} size={[500,500]}/> */}

                <hr />
                <div className="resume_skill">
                    <img src="https://www.advsofteng.com/doc/cdnetdoc/images/colorbar.png" />
                </div>

              </div>
              
              <div className="resume_main">
                <div className="resume_main_title">
                    <h1>Work Experiences</h1>
                </div>

                <hr />
                
                <div className="resume_main_body">

                    <div className="resume_main_card">
                        <ItemCard src={LOGO_PLACEHOLDER} title={"Company Name"} description={"add more properties to ItemCard component"} style={{
                        }}/>    
                    </div>

                    <div className="resume_main_card">
                        <ItemCard src={LOGO_PLACEHOLDER} title={"Company Name"} description={"add more properties to ItemCard component"} />    
                    </div>

                    <div className="resume_main_card">
                        <ItemCard src={LOGO_PLACEHOLDER} title={"Company Name"} description={"add more properties to ItemCard component"} />    
                    </div>

                </div>
              </div>

            </div>
        )
    }
}
