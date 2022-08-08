import React, {useState} from 'react';
import { useNavigate } from 'react-router'; 
import { render } from 'react-dom';
import "./ClubSearch.css";
//bro idek if I got the json names right
const ClubResult = (props) => {
    let navigate = useNavigate();
    function nav() {
     navigate('/club-profile/' + props.clubJSON["clubId"], {replace:true});
    }

    return (
        <>
        <div className="clubResult">
        <div className = "logo">
            <img className="clubSearchImage" src = {(props.clubJSON["profilePictureUrl"] == null) ? require("./img/ccalogo.png") : props.clubJSON["profilePictureUrl"]} alt= {"Club picture of " + props.clubJSON["clubName"]}/>
         </div>
            <div className = "clubListText">
                <a onClick = {nav}  className="writeupTitle clubSearchPageA">{props.clubJSON["clubName"]}</a>
                <div className="clubtag clubSearchPageAContainer">
                {props.clubJSON["clubCategories"].map(tag => 
                    <a className="displayTag clubSearchPageA">{tag}</a>
                )}
            </div>
        </div>
    </div>
    <hr></hr>
    </>
    
)}
export default ClubResult;