import React from "react";
import ReactDOM from "react-dom";
import Clock from './frontend/clock';
import Tab from './frontend/tabs';


const allPanes = [{title: 'first', content: 'first tab'},
{ title: 'second', content: 'second tab' },
{ title: 'third', content: 'third tab' }];


function Root(props){
    
    return (
        <div>
            <Clock />
            <Tab panes={allPanes}/>
        </div>
    )
};

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root />, main);
});