import React, {useState, useEffect, useRef} from 'react';
import "./ClubEditor.css";
import './ClubSearch.css';
import ClubService from './ClubService';

const socialPrompts = {
    "Club Website": "Enter the website of the club",
    "Instagram": "Enter an Instagram handle",
    "Email": "Enter an email address",
    "Classroom": "Enter a Google Classroom invite link",
    "Other": "Enter any link"
}

const SocialModal = (props) => {
    let name = props.currentSocial;
    const [link, setLink] = useState(props.socialMap[name]);
    
    const onDescriptionChange = (e) => {
        setLink(e.target.value);
	};

    const onLinkSubmit = () => {
        ClubService.doAddSocials(name, link).then(response => {props.setRefresh(true)});
        props.setSocialModalIsOpen(false);
        props.setCurrentSocial(null);
    }
    const onLinkRemove = () => {
        ClubService.doRemoveSocials(name, link).then(response => {props.setRefresh(true)});
        props.setSocialModalIsOpen(false);
        props.setCurrentSocial(null);
    }

    const handleKeyPress = (e) => {
        
        if (e.key === 'Enter') {
         onLinkSubmit();
         e.preventDefault();
        }
      };

    return(
        <>
            <h1 className="clubSearchPageH1">{socialPrompts[name]}</h1>
            <input value = {link} onChange={onDescriptionChange} className="socialLinkEditor" onKeyPress = {handleKeyPress}/>
            <button className = "descChangeButton" onClick = {onLinkSubmit}>Submit</button> 
            <button className = "descChangeButton" onClick = {onLinkRemove}>Remove Link</button> 
        </>
    )

}
export default SocialModal;