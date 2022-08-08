import React, {useState} from 'react';
import { render } from 'react-dom';
import "./ClubSearch.css";
import ClubResult from "./ClubResult.js";
import ClubService from './ClubService.js';
function ClubResults(props) {
    

    let listOfHtmlElements = props.clubResultList.map(clubJSON => 
        <ClubResult key={clubJSON["clubId"]} clubJSON = {clubJSON}/>
    ) 
    
    return (
     
        <div className="writeups">
                <h1 className="clubSearchPageH1">Results</h1>
            <div className="divPostsDisplay">
                <hr/>
                <div className="clubList">
                    {listOfHtmlElements}
                </div>
                    
                </div>
        </div>
      
    
    );
}
export default ClubResults;