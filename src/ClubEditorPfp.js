import React, {useState, useEffect} from 'react';
import "./ClubEditor.css";
import Modal from 'react-modal';
import PfpModal from './PfpModal';
import ClubService from './ClubService';

const ClubEditorPfp = (props) => {
    const [tempPfp, setTempPfp] = useState(null)
    const [pfpSelectorOpen, setPfpSelectorOpen] = useState(false);
    
    const handleFile = (e) => {
        ClubService.doChangeImage(e.target.value).then(response => {props.setRefresh(true)});
        setPfpSelectorOpen(false);
    }
    
    return(
        <>
        <img className="clubProfilePicture" src = {props.clubPfp} onClick = {() => setPfpSelectorOpen(true)}/>
        <Modal style = {{content: {"background" : "#3A4750", "overflow" : "scroll", "borderRadius" : "25px"}}} isOpen={pfpSelectorOpen} onRequestClose = {() => {setPfpSelectorOpen(false)}}>
            <PfpModal onFileSelectSuccess={(file) => setTempPfp(file)}
            onFileSelectError={({ error }) => alert(error)} 
            tempPfp = {tempPfp} setTempPfp = {setTempPfp} setRefresh = {props.setRefresh}
            setPfpSelectorOpen = {setPfpSelectorOpen} handleFile = {handleFile}/>
        </Modal>
        </> 
    );
}
export default ClubEditorPfp;