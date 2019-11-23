import React, { Component } from 'react'

import Image from '../components/sub-components/Image';
import ItemCard from '../components/sub-components/ItemCard';
import './styles/Dev.scss';

export default class Dev extends Component {
    render() {
        const PLACEHOLDER = 'https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/profile_pic_placeholder.png';
        const BODY = "I'm a self-taught Full Stack Developer, with a focus on React. I hold a BSc. in Molecular Biology & Biochemistry, and working for BC's largest Biotech firm. I'm open for hire.";
        const PLACEHOLDER_2 = 'https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/project_placeholder.png';

        const DEV_MAIN_MESSAGE = "Hi, I'm Ron Mapue and I'm a self-taught <p>Software Developer</p>, Biotechnologist, and outdoor enthusiast.";
        const ITEM_TITLE_PLACEHOLDER = 'Crazy project';
        const ITEM_DESCRIPTION_PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ";



        const pHAdjuster = { 
            src: "https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/pH_Adjuster.png",
            description: "Built using 2011 Javascript, and Bootstrap 4 with Google App Script. Calculates chemicals required to adjust product pH, and collects data for statistical analysis.",
            title: "pH Adjuster - calculation and data collection"
        };

        const codepen = {
            src: "https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/codepen_projects.png",
            description: "A collection of my early front-end projects varying in complexity. The tech stacks used range from vanilla Javascript, React, jQuery, Bootstrap, and SCSS.",
            title: "Codepen Front End Projects"
        };

        const adp = {
            src:"https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/quiz-app.png",
            description: "A simple front-end quiz application to showcase my vanilla Javascript, HTML5, and CSS3 knowledge for an entrance exam. The code implements a React-like shadow DOM for instant load times.",
            title: "Red Academy Entrance Exam"
        };

        const fcc = {
            src:"https://s3-us-west-2.amazonaws.com/placeholders.ronmapue.com/codepen_placeholders/datastructures.png",
            description: "A collection of hundreds of hours on Front End and Back End development including algorithms and data structure in Javascript.",
            title: "Freecode Camp Front End, Libraries, Javascript, Node completion."
        }

        return (
            <div className="dev">
                <div className="dev_main">
                    <h1>Hi, I'm Ron Mapue. <p>Software Developer,</p> Biotechnologist, and outdoor enthusiast.</h1>
                </div>  

                {/* This can be a new component, if keeping it */}


                <hr/>

                <div className="dev_content">
                   <div className="dev_title">
                     <h1>Development</h1>
                   </div>
                   
                   <hr id="divider"/>

                    <div className="dev_cards">
                    {/* This will eventually be turned into a .map of props */}

                        <div className="dev_cards_card">
                            <ItemCard 
                                src={pHAdjuster.src} 
                                title={pHAdjuster.title} 
                                description={pHAdjuster.description} 
                            />                        
                        </div>

                        <div className="dev_cards_card">
                            <ItemCard 
                                src={codepen.src} 
                                title={codepen.title} 
                                description={codepen.description} 
                            />
                        </div>

                        <div className="dev_cards_card">
                            <ItemCard 
                                src={adp.src} 
                                title={adp.title} 
                                description={adp.description}
                             />   
                        </div>

                        <div className="dev_cards_card">
                            <ItemCard 
                                src={fcc.src} 
                                title={fcc.title} 
                                description={fcc.description} 
                            />   
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
