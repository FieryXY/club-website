import React, {useState} from 'react';
import { render } from 'react-dom';
import "./ClubSearch.css";
const ClubResult = (props) => {
    return (
        <>
        <div className = "logo">
            <img src = {props.clubJSON["profilePictureUrl"]} alt= {"Club picture of " + props.clubJSON["clubName"]}/>
         </div>
            <div className = "clubListText">
                <a className="writeupTitle clubSearchPageA">{props.clubJSON["name"]}</a>
                <div className="clubtag clubSearchPageAContainer">
                {props.clubJSON["clubCategories"].map(tag => 
                    <a className="displayTag clubSearchPageA">{tag}</a>
                )}
            </div>
        </div>
        </>
)}
export default ClubResult;