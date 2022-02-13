import React from 'react';
import {Chrono} from "react-chrono";
import "./cv.css";

function Timeline(props) {

    const items = [{
        title: "Dec 1992",
        cardTitle: "Cologne",
        url: "",
        cardSubtitle: "My first Steps into the world. I was born in Cologne, Germany.",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",

    }, {
        title: "May 1970",
        cardTitle: "Dunkirk",
        url: "",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.Men of the British Expeditionary Force (BEF) wade out to.",
    },

    ];


    return (
        <section>

            <div className="mx-auto container chronoo">
                <Chrono items={items}
                        mode="VERTICAL_ALTERNATING"
                        slideShow
                        slideItemDuration="5000"
                        disableNavOnKey="false"
                        theme={{
                            primary: "rgb(6 78 59)",
                            secondary: "white",
                            cardBgColor: "white",
                            cardForeColor: "black",
                            titleColor: "black"
                        }}

                >

                    <div>
                        <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
                    </div>
                    <div>
                        <img src="<url to  a nice image" />
                    </div>

                </Chrono>
            </div>
            <br className="pb-6"/>


        </section>
    );
}

export default Timeline;
